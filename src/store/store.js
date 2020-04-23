import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import todos from "../features/todos/todosSlice";
import filters from "../features/filters/filtersSlice";

const reducer = {
  todos,
  filters
};

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
    reducer, 
    middleware
});