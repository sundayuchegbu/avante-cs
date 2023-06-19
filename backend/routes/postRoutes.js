const express = require("express");
const { createPost } = require("../controller/postController");
const router = express.Router();

router.route("/news").post(createPost);

module.exports = router;
