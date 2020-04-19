import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: "Todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => { state.push(action.payload) }
    }
});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;