import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 0;
export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nextTodoId++,
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) =>
      state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      ),
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
