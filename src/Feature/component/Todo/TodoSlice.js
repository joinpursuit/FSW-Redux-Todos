import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

let id = 0

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

// payFarmer: (state, { payload }) => {state.payload.paid = !state.payload.paid;    