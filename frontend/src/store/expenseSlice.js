import { createSlice } from "@reduxjs/toolkit";
import { addHistory } from "./thunkFunctions";
import { toast } from "react-toastify";

const initialState = {
  expenses: [],
  isLoading: false,
  error: "",
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addHistory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addHistory.fulfilled, (state, action) => {
        const { date, category, amount, description } = action.payload;
        const newExpense = {
          date,
          category,
          amount,
          description,
        };

        state.expenses.push(newExpense); // Add the new transaction to the array
        state.isLoading = false;
      })

      .addCase(addHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default expenseSlice.reducer;
