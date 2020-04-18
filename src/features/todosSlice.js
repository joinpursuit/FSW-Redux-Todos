import {createSlice } from "@reduxjs/toolkit"


export const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, {payload}) => { state[payload.id] = payload},
        toggleTodos: (state, {payload}) => {
            
        }
    }
})

// state.map(todo =>
//     (todo.id === action.id)
//       ? {...todo, completed: !todo.completed}
//       : todo)