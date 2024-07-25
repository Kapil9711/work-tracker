import usersModel from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../utils/captureAsyncError.js";
import sendToken from "../utils/jwttokens.js";
import verifyEmailAndUsername from "../utils/verifyEmailAndUsername.js";

/**s
 * Get a user profile
 * Route - /api/v1/profile
 */
export const getUserProfile = catchAsyncError(async (req, res, next) => {
  const user = await usersModel.findById(req.user.id).select("-__v");
  res.status(200).json({
    success: true,
    data: user,
  });
});

/**s
 * verify user login
 * Route - /api/v1/verify
 */
export const verifyLogin = catchAsyncError(async (req, res, next) => {
  res.status(200).json({
    success: true,
  });
});

/**s
 * update a user Data
 * Route - /api/v1/profile/update
 */
export const updateUserData = catchAsyncError(async (req, res, next) => {
  // verify if req.body has email,username
  const newUserData = verifyEmailAndUsername(req.body);
  if (!newUserData) {
    return next(new ErrorHandler("Please provide data to update", 400));
  }
  const user = await usersModel.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

/**
 * Update a user password
 * Route - /api/v1/password/update
 */
export const updatePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;

  const user = await usersModel.findById(req.user.id).select("+password");

  const isMatched = await user.comparePassword(oldPassword);

  if (!isMatched) {
    return next(new ErrorHandler("Old Password do not match", 401));
  }
  user.password = newPassword;
  await user.save({ validateBeforeSave: true });
  sendToken(user, 200, "Password updated", res);
});

/**
 * Admin Route
 * Get all users
 * Route - /api/v1/users
 */
export const getAllUser = catchAsyncError(async (req, res, next) => {
  const users = await usersModel.find();
  res.status(200).json({
    sucess: true,
    data: users,
  });
});
