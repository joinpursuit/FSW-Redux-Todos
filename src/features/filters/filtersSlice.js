import { createSlice } from "@reduxjs/toolkit";


export const filtersSlice = createSlice({
  name: "filters",
  initialState: "All",
  reducers: {
    setFilterAll: (state, action) => state.payload
  }
})


export const selectFilters = (state) => state.filters;

export const { setFilterAll } = filtersSlice.action
export default filtersSlice.reducer
