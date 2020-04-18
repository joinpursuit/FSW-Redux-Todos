import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger"


const reducer = {}


const middleware = {...getDefaultMiddleware(), logger}

export default configureStore({
    reducer,
    middleware
})
