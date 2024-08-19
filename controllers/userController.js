import usersModel from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncError from "../utils/captureAsyncError.js";
import sendToken from "../utils/jwttokens.js";
import verifyEmailAndUsername from "../utils/verifyEmailAndUsername.js";
import path from "path";
import fs from "fs";
import fileModel from "../models/files.js";

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

//*****************************upload image file => /api/v1/image/:id */
export const uploadImage = async (req, res, next) => {
  const user = await usersModel.findById(req.user.id);
  if (!user) {
    return next(new ErrorHandler("no task found with this id", 404));
  }
  if (!req.files) {
    return next(new ErrorHandler("Please provide a file", 400));
  }
  const file = req.files.image;
  if (file.size > process.env.AUDIO_SIZE) {
    return next(new ErrorHandler("Audio should be less than 2mb", 400));
  }

  if (!file.mimetype.includes("image")) {
    return next(new ErrorHandler("File should of type image"));
  }

  const name = `img${user.id}${path.parse(file.name).ext}`;
  // console.log(__dirname);
  // console.log(file.name);

  const fileDb = await fileModel.findOne({ user: req.user.id });

  if (!fileDb) {
    await fileModel.create({
      filename: name,
      data: file.data,
      mimetype: file.mimetype,
      user: req.user.id,
    });
    res.status(201).json({
      success: true,
      message: "uploaded successfully",
    });
  } else {
    await fileModel.findByIdAndUpdate(fileDb.id, {
      filename: name,
      data: file.data,
      mimetype: file.mimetype,
    });
    res.status(201).json({
      success: true,
      message: "changed successfully",
    });
  }
};

//**************** */ get audio => /api/v1/image/:id ******************
export const getImageFile = async (req, res, next) => {
  // const user = await usersModel.findById(req.user.id);
  // if (!user || !user.image) {
  //   return next(new ErrorHandler("no image found with this id", 404));
  // }
  const fileDb = await fileModel.findOne({ user: req.user.id });
  if (!fileDb) return next(new ErrorHandler("No file with this user", 404));
  const uploadPath = `/tmp/${fileDb.filename}`;
  // const uploadPath = path.join(__dirname, "temp", fileDb.filename);

  // console.log("reseted");
  res.setHeader("Content-Type", "image/jpeg");
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="userProfile.jpg"'
  );

  fs.writeFile(uploadPath, fileDb.data, (err, data) => {
    if (err) {
      return next(new ErrorHandler());
    }
    const readStream = fs.createReadStream(uploadPath);
    readStream.pipe(res);
  });
};
