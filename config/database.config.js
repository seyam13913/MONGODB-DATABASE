require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("database not connected");
    console.log(error);
    process.exit(1);
  });
