import express from "express";
import fileUpload from "express-fileupload";
import { isAuthenticated } from "../utils/auth.js";

import {
  createTask,
  deleteTask,
  getAllTask,
  getAudioFile,
  getSingleTask,
  updateTask,
  uploadFile,
} from "../controllers/taskController.js";

const router = express.Router();

router.route("/task/new").post(isAuthenticated, createTask);
router.route("/tasks").get(isAuthenticated, getAllTask);
router
  .route("/tasks/:id")
  .get(isAuthenticated, getSingleTask)
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);
router
  .route("/audio/:id")
  .get(isAuthenticated, getAudioFile)
  .post(isAuthenticated, fileUpload(), uploadFile);

export default router;
