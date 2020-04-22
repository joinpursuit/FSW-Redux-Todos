import { createSlice } from "@reduxjs/toolkit";


export const visibilitiesSlice = createSlice({
  name: "visibilities",
  initialState: "All",
  reducers: {
    setVisibilityAll: (state, action) => state.payload
  }
})

export { setAll } = visibilitiesSlice.action
