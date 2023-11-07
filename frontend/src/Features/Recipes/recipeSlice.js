import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetch } from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  page: 1,
  search: "",
  pages: 0,
  total: "",
  recipes: [],
  recipe: null,
  popularRecipes: [],
};

export const getAllRecipes = createAsyncThunk(
  "recipes/allRecipes",
  async (_, thunkAPI) => {
    const { search, page } = thunkAPI.getState().recipes;
    let url = `recipes?page=${page}`;
    if (search) {
      url = url + `&search=${search}`;
    }

    try {
      const { data } = await customFetch.get(url);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const getSingleRecipe = createAsyncThunk(
  "recipes/singleRecipe",
  async (id, thunkAPI) => {
    try {
      const { data } = await customFetch.get(`recipes/${id}`);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const getPopularRecipes = createAsyncThunk(
  "recipes/popularRecipes",
  async (_, thunkAPI) => {
    try {
      const { data } = await customFetch.get(`recipes/popularRecipes`);

      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    searchRecipes: (state, { payload }) => {
      state.search = payload;
    },
    handlePageChange: (state, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllRecipes.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getAllRecipes.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const { pages, recipes, total } = payload;
      state.pages = pages;
      state.recipes = recipes;
      state.total = total;
    });
    builder.addCase(getAllRecipes.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      toast.error(payload);
    });
    builder.addCase(getSingleRecipe.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getSingleRecipe.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.recipe = payload.recipe;
    });
    builder.addCase(getSingleRecipe.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      toast.error(payload);
    });
    builder.addCase(getPopularRecipes.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getPopularRecipes.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.popularRecipes = payload.recipes;
    });
    builder.addCase(getPopularRecipes.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      toast.error(payload);
    });
  },
});

export const { searchRecipes, handlePageChange } = recipeSlice.actions;
export default recipeSlice.reducer;
