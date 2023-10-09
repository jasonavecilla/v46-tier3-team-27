import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetch } from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  recipes: [],
  amount: 0,
};

export const getAllLikedDishes = createAsyncThunk(
  "likedDish/AllDishes",
  async (_, thunkAPI) => {
    try {
      const { data } = await customFetch.get("likedDishes");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const createLikedDish = createAsyncThunk(
  "likedDish/createDish",
  async (dish, thunkAPI) => {
    try {
      const { data } = await customFetch.post("likedDishes", dish);
      return data.msg;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
const likedDishSlice = createSlice({
  name: "likeDish",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllLikedDishes.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getAllLikedDishes.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const { amount, recipes } = payload;

      state.recipes = recipes;
      state.amount = amount;
    });
    builder.addCase(getAllLikedDishes.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      toast.error(payload);
    });
    builder.addCase(createLikedDish.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(createLikedDish.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload);
    });
    builder.addCase(createLikedDish.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      toast.error(payload);
    });
  },
});

export const {} = likedDishSlice.actions;
export default likedDishSlice.reducer;
