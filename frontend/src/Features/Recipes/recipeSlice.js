import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetch } from "../../utils/axios";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  isLoading: false,
  page: 1,
  search: "",
};

export const getAllRecipes = createAsyncThunk(
  "recipes/allRecipes",
  async (payload, thunkAPI) => {
    // const { search, page } = payload;
    // let url = `recipes`;
    // if (search) {
    //   url = url + `&search=${search}`;
    // }

    try {
      const res = await axios.get(
        `https://v46-tier3-team-27-production.up.railway.app/api/v1/recipes`
      );
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      console.log("rejected");
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
      toast.error(payload);
    });
  },
});

export const {} = recipeSlice.actions;
export default recipeSlice.reducer;
