import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import validator from "validator";
import { type } from "os";

const options = {
  username: {
    type: String,
    required: [true, "Please enter your username"],
    unique: true,
    minLength: [5, "Username should be more than 5 character"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password length should be more than 8 character"],
    select: false,
  },
  admin: {
    type: Boolean,
    default: false,
    select: false,
  },
  image: {
    type: String,
  },
  resetPasswordToken: String,
  resetPasswordExpires: String,
};

// Adding timestamps when creating the user
const userSchema = new Schema(options, { timestamps: true });

// Hashing password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Methods
// Compares Password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Gets JSON Web Token
userSchema.methods.getJwtToken = function () {
  const payload = { id: this._id };
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

// Gets password reset token
userSchema.methods.getResetPasswordToken = function () {
  //generating reset token
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpires = Date.now() + 30 * 60 * 1000;
  return resetToken;
};

const usersModel = model("User", userSchema);

export default usersModel;
