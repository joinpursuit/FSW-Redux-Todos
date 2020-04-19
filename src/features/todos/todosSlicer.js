import { createSlice } from "@reduxjs/toolkit";

let autoId = 1;

export const todosSlicer = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, { payload }) => (state[payload.id] = payload),
      prepare: (todo) => {
        return { payload: { id: autoId++, ...todo, completed: false } };
      },
    },
    toggleTodo: (state, payload) => {
      state.payload.completed =! state.payload.completed;
    }
  }
});


export const { addTodo, toggleTodo } = todosSlicer.actions;
export default todosSlicer.reducer;
