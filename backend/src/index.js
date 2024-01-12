const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const port = 3000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongoose");
  })
  .catch((error) => {
    console.error(error);
  });

// app.use("/users", require("./routes/users"));
//app.use("/users", require("./routes/users"));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
