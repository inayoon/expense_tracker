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

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
