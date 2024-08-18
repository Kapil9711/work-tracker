import catchAsyncError from "../utils/captureAsyncError.js";
import usersModel from "../models/User.js";
import sendToken from "../utils/jwttokens.js";
import ErrorHandler from "../utils/errorHandler.js";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";
import jwt from "jsonwebtoken";

/**
 * Registers a user
 * Route - /api/v1/register    catch(fn)
 */
export const register = catchAsyncError(async (req, res, next) => {
  const user = await usersModel.create(req.body);
  const token = user.getJwtToken();
  try {
    const url = `${req.protocol}://work-tracker-eight.vercel.app/api/v1/isVerify/${token}`;
    const message = `<a href=${url}>Verify</a>`;

    await sendEmail({
      email: user.email,
      subject: "Verify user email",
      message,
    });
    res.status(200).json({
      success: true,
      message: "email sent successfully",
    });
  } catch (error) {
    await usersModel.findByIdAndDelete(user.id);
    res.status(500).json({
      success: false,
      message: "please provide correct email",
    });
  }
  // sendToken(user, 200, "Registered successfully", res);
});

// verify user email => /api/v1/isVerify/:token
export const isVerifiedUser = catchAsyncError(async (req, res, next) => {
  const token = req.params.token;
  if (token.length < 10)
    return next(new ErrorHandler("please provide token", 400));
  const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const user = await usersModel.findById(decode.id);
  user.isVerified = true;
  await user.save();
  res.header("ContentType", "text/html");
  res.send(
    "<h1> verified successfully visit: <a href='http://work-tracker-eight.vercel.app'>login</a></h1>"
  );
});

/**
 * Login a user
 * Route - /api/v1/login
 */
export const loginUser = catchAsyncError(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(new ErrorHandler("Provide both username and password", 400));
  }
  const user = await usersModel.findOne({ username }).select("+password");
  // check if user exist or not
  if (!user) {
    return next(new ErrorHandler("Invalid username or password", 401));
  }
  if (!user.isVerified) {
    return next(new ErrorHandler("User is not verified", 401));
  }
  const isPasswordCorrect = await user.comparePassword(password);
  // check if password is correct
  if (!isPasswordCorrect) {
    return next(new ErrorHandler("Invalid username or password", 400));
  }
  sendToken(user, 200, "Login successful", res);
});

/**
 * Logout a user
 * Route - /api/v1/logout
 */
export const logoutUser = catchAsyncError(async (req, res, next) => {
  const token = "none";
  const options = { expires: new Date(Date.now()), httpOnly: true };
  // expiring cookie now
  res.cookie("token", token, options).status(200).json({
    success: true,
    message: "Logout successfull",
  });
});

/**
 * Forgot Password
 * Route - /api/v1/password/forgot
 */
export const forgotPassword = catchAsyncError(async (req, res, next) => {
  const { email, username } = req.body;
  if (!email || !username) {
    return next(new ErrorHandler("provide email and username", 400));
  }
  const user = await usersModel.findOne({ email, username });
  if (!user) return next(new ErrorHandler("Invalid email or username", 400));
  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
    message: "User Found Successfuly",
    resetToken,
  });
});

/**
 * Reset Password
 * Route - /api/v1/password/reset
 */
export const resetPassword = catchAsyncError(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await usersModel.findOne({
    resetPasswordToken,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    return next(new ErrorHandler("Invalid reset token or token expired", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();
  sendToken(user, 200, "Password reset successfull", res);
});
