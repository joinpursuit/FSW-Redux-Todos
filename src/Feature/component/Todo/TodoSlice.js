import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

let nextTodoId = 0

export const TodoSlice = createSlice({
    name: "todo",
    initalState: [],
    reducers:{
        addTodo:{
            reducer:(state, action)=>{ state.unshift(action.payload)},
            prepare:(todo) =>({payload: {id: nextTodoId++, todo, completed: false}})

        }, 
        toggleTodo: (state, action)=>state.map((todo)=>todo.id === action.payload ? {...todo, completed : !todo.completed}:todo)  
    }
})
export const {addTodo, toggleTodo} = TodoSlice.actions
export default TodoSlice.reducer

// payFarmer: (state, { payload }) => {state.payload.paid = !state.payload.paid;    