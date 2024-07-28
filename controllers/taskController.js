import catchAsyncError from "../utils/captureAsyncError.js";
import taskModel from "../models/Task.js";
import ErrorHandler from "../utils/errorHandler.js";
import path from "path";
import fs from "fs";

import ApiFilters from "../utils/ApiFilters.js";

//*********************create Task => /api/v1/task/new  */********************** */
export const createTask = catchAsyncError(async (req, res, next) => {
  const user = req.user.id;
  const task = await taskModel.create({ ...req.body, user });
  res.status(201).json({ success: true, data: task });
});

// ************************get all task => /api/v1/tasks**************
export const getAllTask = catchAsyncError(async (req, res, next) => {
  const user = req.user.id;
  const apiFilters = new ApiFilters(taskModel.find({ user }), req.query)
    .filter()
    .sort()
    .limitFields();
  // .pagination();

  const tasks = await apiFilters.query;

  if (tasks?.length === 0 || !tasks) {
    return next(new ErrorHandler("no task found", 404));
  }
  res.status(200).json({ success: true, results: tasks.length, data: tasks });
});

// ************************get single task => /api/v1/tasks/:id**************
export const getSingleTask = catchAsyncError(async (req, res, next) => {
  const task = await taskModel.findById(req.id);

  if (task?.length === 0 || !task) {
    return next(new ErrorHandler("no task found", 404));
  }
  res.status(200).json({ success: true, data: task });
});

// ************************update task => /api/v1/tasks/:id**************
export const updateTask = catchAsyncError(async (req, res, next) => {
  let task = await taskModel.findById(req.params.id);

  if (task?.length === 0 || !task) {
    return next(new ErrorHandler("no task found", 404));
  }
  task = await taskModel.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });
  res.status(200).json({ success: true, data: task });
});

// ************************delete task => /api/v1/tasks/:id**************
export const deleteTask = catchAsyncError(async (req, res, next) => {
  let task = await taskModel.findById(req.params.id);

  if (task?.length === 0 || !task) {
    return next(new ErrorHandler("no task found", 404));
  }
  await taskModel.findByIdAndDelete(req.params.id);

  res.status(200).json({ success: true, message: "task deleted" });
});

//*****************************upload audio file => /api/v1/audio/:id */
export const uploadFile = async (req, res, next) => {
  const task = await taskModel.findById(req.params.id);
  if (!task) {
    return next(new ErrorHandler("no task found with this id", 404));
  }
  if (!req.files) {
    return next(new ErrorHandler("Please provide a file", 400));
  }
  const file = req.files.audio;

  if (file.size > process.env.AUDIO_SIZE) {
    return next(new ErrorHandler("Audio should be less than 2mb", 400));
  }

  if (!file.mimetype.includes("audio")) {
    return next(new ErrorHandler("File should of type audio"));
  }

  file.name = `${req.user.username.split(" ").join("_")}-audio${task.id}${
    path.parse(file.name).ext
  }`;
  file.mv(`./files/uploads/${file.name}`, async (err) => {
    if (err) return next(new ErrorHandler("file not uploadeded"));
    task.audio = file.name;
    await task.save();
    res.send("uploaded successfully");
  });
};

//**************** */ get audio => /api/v1/audio/:id ******************
export const getAudioFile = async (req, res, next) => {
  const task = await taskModel.findById(req.params.id);
  if (!task || !task.audio) {
    return next(new ErrorHandler("no audio found with this id", 404));
  }
  const filePath = path.join(__dirname, "files", "uploads", task.audio);
  res.setHeader("Content-Type", "audio/mpeg");
  res.setHeader("Content-Disposition", 'attachment; filename="sample.mp3"');
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
};


