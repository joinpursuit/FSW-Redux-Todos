import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState: "ALL",
  reducers: {
    toggleVis: (state, action) => {
      return action.payload;
    },
  },
});

export const { toggleVis } = visibilitySlice.actions;
export const visState = (state) => state.visibility;
export default visibilitySlice.reducer;
