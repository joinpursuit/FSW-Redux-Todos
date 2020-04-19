import {createSlice} from '@reduxjs/toolkit'
export const TodoSlice =createSlice({
    name: 'todos',
    initialState: [],
    reducers:{
        addTodo:(state, {payload})=>{state.push(payload)},
        clearTodo:()=>[]
    }, 
    extraReducers:{
        [toggleTodos]: state=>{state.push('todo completed')}
    }
})
export const {addTodo, clearTodo} = TodoSlice.actions
export default TodoSlice.reducer