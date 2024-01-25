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
    await User.findByIdAndUpdate(
      userId,
      { $push: { transactions: transaction._id } },
      { new: true }
    );

    return res.status(201).json({
      _id: transaction._id,
      user: transaction.user,
      date: transaction.date,
      category: transaction.category,
      description: transaction.description,
      amount: transaction.amount,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  const idToDelete = req.params.id;

  try {
    // MongoDB에서 해당 ID를 기반으로 문서 삭제
    const deletedTransaction = await Transaction.findByIdAndDelete(idToDelete);
    // 삭제된 문서가 없는 경우 에러 응답
    if (!deletedTransaction) {
      return res.status(404).json({ message: "Error: Data not found." });
    }

    // 성공 응답
    res
      .status(200)
      .json({
        deletedId: deletedTransaction._id,
        message: "Success: Data deleted successfully.",
      });
  } catch (error) {
    // 에러 응답
    console.error(error);
    res.status(500).json({ message: "Error: Internal server error." });
  }
});

module.exports = router;
