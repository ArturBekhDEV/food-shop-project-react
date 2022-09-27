import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sort: "rating",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setCategorySort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setCategorySort } = filterSlice.actions;

export default filterSlice.reducer;
