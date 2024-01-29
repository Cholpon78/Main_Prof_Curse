import { createAsyncThunk } from "@reduxjs/toolkit";
import { rootUrl, categoryUrl } from "../helpers";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const response = await fetch(`${rootUrl}${categoryUrl}`);
    const data = await response.json();
    return data;
  }
);
