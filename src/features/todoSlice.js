import { createSlice } from "@reduxjs/toolkit";
let nextTodoId = 0;

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => {
        return {
          payload: {
            id: nextTodoId++,
            text,
            completed: false,
          },
        };
      },
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
