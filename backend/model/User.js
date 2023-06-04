const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    avatar: { type: String, default: "" },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, required: false },
    verificationCode: { type: String, required: false },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
module.exports = User;
