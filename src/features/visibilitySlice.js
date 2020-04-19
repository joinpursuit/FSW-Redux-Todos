import { createSlice } from "@reduxjs/toolkit";

const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const visibilitySlice = createSlice({
  name: "visibilityFilter",
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {},
});

export const {} = visibilitySlice.actions;
export default visibilitySlice.reducer;
