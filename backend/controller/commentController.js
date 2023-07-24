const Comments = require("../model/Comments");

const createComments = async (req, res, next) => {
  try {
    const newComment = new Comments({
      name: req.body.name,
      email: req.body.email,
      reason: req.body.reason,
      details: req.body.details,
    });
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    console.error("Error saving comment:", error);
    res.status(500).json({ error: "Failed to save comment" });
  }
};

const getAllComments = async (req, res, next) => {
  try {
    const comment = await Comments.find();
    res.json(comment);
  } catch (error) {
    next(error);
  }
};

module.exports = { createComments, getAllComments };
