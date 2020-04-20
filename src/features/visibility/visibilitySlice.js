import { createSlice } from '@reduxjs/toolkit'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

export const visibilitySlice = createSlice({
    name:"VisibilityFilters",
    initialState:VisibilityFilters.SHOW_ALL,
    reducers: {

        setVisibilityFilter:(state, { payload }) => state = payload  
    }
    
})

export const { setVisibilityFilter } = visibilitySlice.actions;
export default visibilitySlice.reducer;