import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import todos from "../features/toDoFeature/toDoSlice"

const middleware = [...getDefaultMiddleware()]
const reducer = {
    todos
}
export default configureStore({
    reducer, 
    middleware
})

