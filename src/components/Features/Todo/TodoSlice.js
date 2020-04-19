import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

let id = 1

export const TodoSlice = createSlice({
    name: "todo",
    initalState = [],
    reducers:{
        addTodo:{
            reducer:(state, action)=>{ state.unshift(action.payload) },
            prepare:(todo) =>({payload: {id: id++, title: todo}})

        }
    }
})
