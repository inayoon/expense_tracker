const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.js");
const Transaction = require("../models/Transactions.js");
const User = require("../models/User.js");

router.post("/add", auth, async (req, res, next) => {
  try {
    const { date, category, description, amount } = req.body;
    const userId = req.user._id;
    const transaction = new Transaction({
      user: userId,
      date,
      category,
      description,
      amount,
    });
    await transaction.save();

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.transactions.push(transaction._id);

    // Save the updated user model
    await user.save();

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
