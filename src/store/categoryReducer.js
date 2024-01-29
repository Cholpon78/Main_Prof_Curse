import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../asyncAction/categoriesFetch";

const initialState = {
  rootUrl: "", 
  categoryUrl: "", 
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const categoryReducer = categorySlice.reducer;
