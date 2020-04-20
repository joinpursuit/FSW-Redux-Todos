import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

let nextTodoId = 0

export const TodoSlice = createSlice({
    name: "todo",
    initalState = [],
    reducers:{
        addTodo:{
            reducer:(state, action)=>{ state.unshift(action.payload)},
            prepare:(todo) =>({payload: {id: nextTodoId++, title: todo, completed: false}})

        }, 
        toggleTodo:{
            reducer: (state, action)=>state.map((todo)=>{
                todo.id === action.id ? {...todo, completed : !todo.completed}
                :todo
            })
            
        }
    }
})
export const {addTodo, toggleTodo} = todoSlice.actions
export default TodoSlice.reducer

// payFarmer: (state, { payload }) => {state.payload.paid = !state.payload.paid;    