// expenseSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { addHistory } from "./thunkFunctions"; // thunk 함수 가져오기

const initialState = {
  expenses: {},
  isLoading: false,
  error: "",
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    // 다른 리듀서 액션 추가...
  },
  extraReducers: (builder) => {
    builder
      .addCase(addHistory.fulfilled, (state, action) => {
        const { date, category, description, amount } = action.payload;

        // date에 해당하는 배열이 없으면 빈 배열로 초기화
        if (!state.expenses[date]) {
          state.expenses[date] = [];
        }

        // 새로운 지출 항목 추가
        state.expenses[date].push({ category, description, amount });
      })
      .addCase(addHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.error(action.payload);
      });
  },
});

export default expenseSlice.reducer;
