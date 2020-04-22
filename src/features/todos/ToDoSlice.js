import { createSlice } from '@reduxjs/toolkit';

let id = 1

export const ToDoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addToDo: {
            reducer: (state, action) => { state.push(action.payload)},
            prepare: (todo) => ({payload: {id: id++, text:todo ,completed: false}})
        },
        toggleToDo: (state, action) => 
            state.map((todo) => todo.id === action.payload
            if(todo) {
                todo.completed = !todo.completed
                }
            )
        }
    }
})

// export const selectToDoList = state => state.todo;

export const { addToDo, toggleToDo } = ToDoSlice.actions;
export default ToDoSlice.reducer;