import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import todos from "./features/todoSlice";
import visibilityFilter from "./features/visibilitySlice";

const middleware = [...getDefaultMiddleware(), logger];

const reducer = {
  todos,
  visibilityFilter,
};

const store = configureStore({
  reducer,
  middleware,
});

export default store;

// import { combineReducers } from 'redux'
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'

// export default combineReducers({
//   todos,
//   visibilityFilter
// })
