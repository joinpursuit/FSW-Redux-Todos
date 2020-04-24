import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import todos from "./features/TodoFeatures/todoSlice";
import visibility from "./features/VisibilityFeatures/visibilitySlice";

const reducer = {
  todos,
  visibility,
};

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
