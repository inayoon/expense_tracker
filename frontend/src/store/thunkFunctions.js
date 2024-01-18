import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (body, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/register", body);
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/login", userData);

      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);

export const authUser = createAsyncThunk(
  "user/authUser",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/user/auth");
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);
