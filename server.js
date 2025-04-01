require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// internal import
const authRoute = require("./routes/user.route");
require("./config/database.config");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world");
});

// auth route
app.use("/auth", authRoute);

// route not found
app.get((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

// server error
app.get((err, req, res, next) => {
  res.status(500).json({
    message: "Something broken",
    error: err,
  });
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
