const express = require("express");
const {
  register,
  login,
  updateProfilePicture,
} = require("../controllers/auth.controller.js");
const { protect } = require("../middlewares/auth.middleware.js");
const upload = require("../middlewares/upload.middleware.js");

const router = express.Router();

router.post("/register", upload.single("profile_picture"), register);
router.post("/login", login);
router.put(
  "/profile-picture",
  protect,
  upload.single("profile_picture"),
  updateProfilePicture
);

module.exports = router;
