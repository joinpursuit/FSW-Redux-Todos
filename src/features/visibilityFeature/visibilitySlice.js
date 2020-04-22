import { createSlice } from "@reduxjs/toolkit"

export const visibilitySlice = createSlice({
    name: "visibilityFilter",
    initialState: "",
    reducers: {
        setVisibilityFilter: (state, action ) => action.payload
    }
})

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

export const { setVisibilityFilter } = visibilitySlice.actions
export default visibilitySlice.reducer