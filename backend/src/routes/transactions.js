const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");
const Transaction = require("../models/Transactions.js");

router.post("/", auth, async (req, res, next) => {
  try {
    const transaction = new Transaction(req.body);
    transaction.save();
    const user = await User.findById(req.user._id);
    user.transactions.push(transaction._id);
    await user.save();
    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
