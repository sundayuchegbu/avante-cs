const express = require("express");
const {
  createFeedback,
  getAllFeedbacks,
} = require("../controller/feedbackController");
const router = express.Router();

router.route("/feedback").post(createFeedback);
router.route("/feedbacks").get(getAllFeedbacks);

module.exports = router;
