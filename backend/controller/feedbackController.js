const Feedback = require("../model/Feedback");

const createFeedback = async (req, res, next) => {
  try {
    const { name, email, reason, msg } = req.body;

    // check whether the user exists or not
    let feedback = await Feedback.findOne({ email });

    // creating a new
    feedback = await Feedback.create({
      name,
      email,
      reason,
      msg,
    });

    return res.status(201).json({
      name: feedback.name,
      email: feedback.email,
      reason: feedback.reason,
      msg: feedback.msg,
    });
  } catch (error) {
    next(error);
  }
};

const getAllFeedbacks = async (req, res, next) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (error) {
    next(error);
  }
};

module.exports = { createFeedback, getAllFeedbacks };
