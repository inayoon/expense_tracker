const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");
const Transaction = require("../models/Transactions.js");

router.post("/", auth, async (req, res, next) => {
  try {
    const transaction = new Transaction(req.body);
    transaction.save();
    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
