import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title cannot be empty"],
    minLength: [6, "Title should have 6 characters"],
  },
  targetDateTime: {
    type: String,
    require: [true, "targetDataTime should be provided"],
  },
  eventType: {
    type: String,
    enum: {
      values: ["Birthday", "Anniversry", "Others"],
    },
    default: "Birthday",
  },
  description: {
    type: String,
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

const eventModel = model("Event", eventSchema);

export default eventModel;
