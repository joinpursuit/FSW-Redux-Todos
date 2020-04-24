import { createSlice } from "@reduxjs/toolkit";

export const visibilitySlice = createSlice({
  name: "visibility",
  initialState: "All",
  reducers: {
    toggleVis: (state, action) => {
      if (action.payload === "Active") {
        state.filter((todo) => {
          return todo.completed === false;
        });
      }
      if (action.payload === "Completed") {
        state.filter((todo) => {
          return todo.completed === true;
        });
      }
      return state;
    },
  },
});

export default visibilitySlice.reducer;
export const { toggleVis } = visibilitySlice.actions;
export const visState = (state) => state.visibility;
