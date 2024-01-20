import { createSlice } from "@reduxjs/toolkit";
import { addHistory } from "./thunkFunctions";
import { toast } from "react-toastify";

const initialState = {
  expenses: {},
  isLoading: false,
  error: "",
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addHistory.fulfilled, (state, action) => {
        const { date, category, description, amount } = action.payload;

        if (!state.expenses[date]) {
          state.expenses[date] = [];
        }

        state.expenses[date].push({ category, description, amount });
      })
      .addCase(addHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        toast.error(action.payload);
      });
  },
});

export default expenseSlice.reducer;
