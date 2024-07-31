import express from "express";
// import fileUpload from "express-fileupload";
import { isAuthenticated } from "../utils/auth.js";

import {
  createEvent,
  deleteEvent,
  getAllEvent,
  getSingleEvent,
  updateEvent,
} from "../controllers/eventController.js";

const router = express.Router();

router.route("/event/new").post(isAuthenticated, createEvent);
router.route("/events").get(isAuthenticated, getAllEvent);
router
  .route("/event/:id")
  .get(isAuthenticated, getSingleEvent)
  .put(isAuthenticated, updateEvent)
  .delete(isAuthenticated, deleteEvent);
// router
//   .route("/audio/:id")
//   .get(isAuthenticated, getAudioFile)
//   .post(isAuthenticated, fileUpload(), uploadFile);

export default router;
