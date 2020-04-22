import { createSlice } from "@reduxjs/toolkit";

let autoId = 1;

export const todosSlice = createSlice({
	name: "todos",
	initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (todo) => {
        return { payload: { id: autoId++, text: todo, completed: false } };
      },
    },
    toggleTodo: {
      reducer: (state, action) => {
      return state.map((todo) => {
        if (todo.id === Number(action.payload)) {
          let newTodo = { ...todo }
          newTodo.completed = !newTodo.completed
          return newTodo
        }
        return todo
      })
    }
    }
  }
});


export const selectTodos = (state) => state.todos;

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
