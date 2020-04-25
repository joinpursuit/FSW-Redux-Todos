import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import logger from "redux-logger"
import todo from "../Feature/component/Todo/TodoSlice"

const middleware = [...getDefaultMiddleware(), logger]

const reducer = {
    todo
}

const store = configureStore({
    reducer, 
    middleware
})
export default store 