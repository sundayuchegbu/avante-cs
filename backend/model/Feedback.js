const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const validator = require("validator");

const feedbackSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email address"],
    },
    reason: { type: String, required: true, unique: true },
    msg: { type: Object, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const Feedback = model("Feedback", feedbackSchema);
module.exports = Feedback;
