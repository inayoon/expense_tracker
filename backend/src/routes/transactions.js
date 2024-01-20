const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");
const Transaction = require("../models/Transactions.js");
const User = require("../models/User.js");

router.post("/add", auth, async (req, res, next) => {
  try {
    const { date, category, description, amount } = req.body;
    const user = req.user._id;
    const transaction = new Transaction({
      user,
      date,
      category,
      description,
      amount,
    });

    await transaction.save();
    return res.status(201).json({
      date: transaction.date,
      category: transaction.category,
      description: transaction.description,
      amount: transaction.amount,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
