import express from "express";
import fileUpload from "express-fileupload";

import { isAuthenticated, isAuthorize } from "../utils/auth.js";
import {
  getAllUser,
  getUserProfile,
  updatePassword,
  updateUserData,
  verifyLogin,
  uploadImage,
  getImageFile,
} from "../controllers/userController.js";
import {
  forgotPassword,
  isVerifiedUser,
  loginUser,
  logoutUser,
  register,
  resetPassword,
} from "../controllers/authController.js";

const router = express.Router();

// User routes
router.route("/register").post(register);
router.route("/login").post(loginUser);
router.route("/logout").get(isAuthenticated, logoutUser);
router.route("/profile").get(isAuthenticated, getUserProfile);
router.route("/verify").get(isAuthenticated, verifyLogin);
router.route("/isVerify/:token").get(isVerifiedUser);
router.route("/profile/update").put(isAuthenticated, updateUserData);
router.route("/password/forgot").put(forgotPassword);
router.route("/password/update").put(isAuthenticated, updatePassword);
router.route("/password/reset/:token").put(resetPassword);
router
  .route("/image")
  .get(isAuthenticated, getImageFile)
  .post(isAuthenticated, fileUpload(), uploadImage);

// Admin routes
router.route("/users").get(isAuthenticated, isAuthorize(), getAllUser);
// router.route("/users/:id").get(isAuthenticated, isAuthorize);
export default router;
