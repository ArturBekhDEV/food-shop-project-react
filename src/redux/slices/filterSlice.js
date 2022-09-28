import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  pagination: 1,
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
    setPageCounts(state, action) {
      state.pagination = action.payload;
    },
  },
});

export const { setCategoryId, setCategorySort, setPageCounts } =
  filterSlice.actions;

export default filterSlice.reducer;
