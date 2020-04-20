import { createSlice } from '@reduxjs/toolkit';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_ACTIVE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const VisibilitySlice = createSlice({
    name: 'visibilityFilters',
    initialState: VisibilityFilters.SHOW_ALL,
    reducers: {
        setVisibilityFilter: (state, action) => action.payload

    }
})

export const { setVisibilityFilter } = VisibilitySlice.actions;
export default VisibilitySlice;