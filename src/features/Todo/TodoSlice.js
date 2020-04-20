import { createSlice } from '@reduxjs/toolkit'

let id =1;

export const TodoSlice = createSlice({
    name:"Todo",
    initialState:[],
    reducers: {

        addTodo:{
            reducer: (state, action) => {state.push(action.payload)},
            prepare: (todo) => ({payload: {id: id++, text:todo, completed:false }})
        },

        toggleTodo: (state, { payload }) => {
            debugger
            state.forEach(todo => {
                console.log(todo)
            })
        },
        
            
    }
    
})

export const { addTodo, toggleTodo } = TodoSlice.actions;
export default TodoSlice.reducer;