const User = require("../models/user.model.js");
const authService = require("../services/auth.service.js");
const { uploadImageBuffer } = require("../services/upload.service.js");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    let imageUrl = "";
    if (req.file) {
      imageUrl = await uploadImageBuffer(req.file.buffer, "profile_pictures");
    }

    const user = new User({ name, email, password, profile_picture: imageUrl });
    await user.save();

    const token = authService.generateToken(user);

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profile_picture: user.profile_picture,
      },
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = authService.generateToken(user);

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profile_picture: user.profile_picture,
      },
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateProfilePicture = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const imageUrl = await uploadImageBuffer(
      req.file.buffer,
      "profile_pictures"
    );

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { profile_picture: imageUrl },
      { new: true }
    );

    res.status(200).json({ message: "Profile picture updated", user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
