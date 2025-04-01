const express = require("express");

// internal import
const User = require("../models/user.model");

// get router from express
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});

// register route
router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({
      message: "user is created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
      error: error.message,
    });
  }
});

// login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (user && user.password === password) {
      res.status(200).json({
        message: "user is login",
      });
    } else {
      res.status(404).json({
        message: "user not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
