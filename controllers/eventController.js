import catchAsyncError from "../utils/captureAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import eventModel from "../models/Event.js";

import ApiFilters from "../utils/ApiFilters.js";

//*********************create Task => /api/v1/event/new  */********************** */
export const createEvent = catchAsyncError(async (req, res, next) => {
  const user = req.user.id;
  const event = await eventModel.create({ ...req.body, user });
  res.status(201).json({ success: true, data: event });
});

// ************************get all event => /api/v1/events**************
export const getAllEvent = catchAsyncError(async (req, res, next) => {
  const user = req.user.id;
  const apiFilters = new ApiFilters(eventModel.find({ user }), req.query)
    .filter()
    .sort()
    .limitFields();
  // .pagination();

  const event = await apiFilters.query;

  if (event?.length === 0 || !event) {
    return next(new ErrorHandler("no event found", 404));
  }
  res.status(200).json({ success: true, results: event.length, data: event });
});

// ************************get single event => /api/v1/events/:id**************
export const getSingleEvent = catchAsyncError(async (req, res, next) => {
  const event = await eventModel.findById(req.id);

  if (event?.length === 0 || !event) {
    return next(new ErrorHandler("no event found", 404));
  }
  res.status(200).json({ success: true, data: event });
});

// ************************update event => /api/v1/events/:id**************
export const updateEvent = catchAsyncError(async (req, res, next) => {
  let event = await eventModel.findById(req.params.id);

  if (event?.length === 0 || !event) {
    return next(new ErrorHandler("no event found", 404));
  }
  event = await eventModel.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });
  res.status(200).json({ success: true, data: event });
});

// ************************delete event => /api/v1/events/:id**************
export const deleteEvent = catchAsyncError(async (req, res, next) => {
  let event = await eventModel.findById(req.params.id);

  if (event?.length === 0 || !event) {
    return next(new ErrorHandler("no event found", 404));
  }
  await taskModel.findByIdAndDelete(req.params.id);

  res.status(200).json({ success: true, message: "event deleted" });
});
