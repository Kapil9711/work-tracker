import jwt from "jsonwebtoken";
import catchAsyncError from "./captureAsyncError.js";
import ErrorHandler from "./errorHandler.js";
import usersModel from "../models/User.js";

export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  let token;
  if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(
      new ErrorHandler("Please login before accessing this information", 401)
    );
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
  const user = await usersModel.findById(decode.id).select("+admin");
  req.user = user;

  next();
});

export const isAuthorize = () => {
  return (req, res, next) => {
    if (req.user.admin === false) {
      return next(
        new ErrorHandler("You are not alowed to access this resouce", 401)
      );
    }
    next();
  };
};
