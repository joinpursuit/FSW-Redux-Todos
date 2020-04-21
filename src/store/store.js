import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import todos from "../features/todos/todosSlice";

const reducer = {
  todos
};

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
    reducer, 
    middleware
});