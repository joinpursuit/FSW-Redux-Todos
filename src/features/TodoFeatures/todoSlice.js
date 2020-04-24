import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.unshift(action.payload);
    },
    toggleTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === Number(action.payload)) {
          let newTodo = { ...todo };
          newTodo.completed = !newTodo.completed;
          return newTodo;
        }
        return todo;
      });
    },
  },
});

export const todosState = (state) => state.todos;
export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
