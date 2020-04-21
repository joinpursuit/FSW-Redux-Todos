import { createSlice } from "@reduxjs/toolkit";

let autoId = 1;

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, { payload }) => {
        (state[payload.id] = payload)
      },
      prepare: (todo) => {
        return { payload: { id: autoId++, text: todo, completed: false } };
      },
    },
    toggleTodo: (state, payload) => {
      state.payload.completed =! state.payload.completed;
    }
  }
});

export const selectTodos = state => state.todos;

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
