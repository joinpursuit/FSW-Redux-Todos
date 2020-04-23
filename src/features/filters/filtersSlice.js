import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: "All",
  reducers: {
    setFilterAll: (state, action) => {
      action.payload;
    },
    setFilterCompleted: (state, action) => {
      state.filter((todo) => todo.completed);
    },
    setFilterActive: (state, action) => {
      state.filter((todo) => !todo.completed);
    },
  },
});

export const selectFilters = (state) => state.filters;

export const {
  setFilterAll,
  setFilterCompleted,
  setFilterActive,
} = filtersSlice.action;
export default filtersSlice.reducer;
