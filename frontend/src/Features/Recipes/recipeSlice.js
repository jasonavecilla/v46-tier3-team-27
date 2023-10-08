import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetch } from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  page: 1,
  search: "",
};

export const getAllRecipes = createAsyncThunk(
  "recipes/allRecipes",
  async (payload, thunkAPI) => {
    const { search, page } = payload;
    let url = `recipes?page=${payload}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const { data } = await customFetch(url);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.data.response.msg);
    }
  }
);
export const getSingleRecipe = createAsyncThunk();
export const getPopularRecipes = createAsyncThunk();
const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllRecipes.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getAllRecipes.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(getAllRecipes.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error("rejected");
    });
  },
});

export const {} = recipeSlice.actions;
export default recipeSlice.reducer;
