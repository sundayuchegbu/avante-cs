const express = require("express");
const {
  registerUser,
  login,
  profile,
  updateProfile,
} = require("../controller/userController");
const { authGuard } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/profile").get(authGuard, profile);
router.route("/updateProfile").put(authGuard, updateProfile);

module.exports = router;
