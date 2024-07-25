import mongoose from "mongoose";

// Connecting MongoDB
const connectDB = async (connectionStr) => {
  try {
    await mongoose.connect(connectionStr);
    console.log("connection to mongodb is successfull");
  } catch (error) {
    console.log(error);
    throw new Error("connection to mongodb failed");
  }
};

export default connectDB;
