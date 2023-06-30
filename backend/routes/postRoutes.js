const express = require("express");
const {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
} = require("../controller/postController");
const { authGuard, adminGuard } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/post").post(authGuard, adminGuard, createPost).get(getAllPosts);
router.route("/post/:slug").put(authGuard, adminGuard, updatePost);
router.route("/post/:id").delete(authGuard, adminGuard, deletePost);
router.route("/post/:slug").get(authGuard, adminGuard, getPost);

module.exports = router;
