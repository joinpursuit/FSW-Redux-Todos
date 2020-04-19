import {createSlice} from '@reduxjs/toolkit'
export const TodoSlice =createSlice({
    name: 'todos',
    initialState: [],
    reducers:{
        addTodo:(state, {payload})=>{state.push(payload)},
        toggleTodo:(state, action) =>state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed }: todo),
    },
    // state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo )
    
})
export const {addTodo, toggleTodo} = TodoSlice.actions
export default TodoSlice.reducer