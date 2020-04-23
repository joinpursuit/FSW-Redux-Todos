import { configureStore } from "@reduxjs/toolkit";
// import todos from "./reducers/todos";
// import visibilityFilter from "./reducers/visibilityFilter";
import todos from "./features/TodoFeatures/todoSlice";

const reducer = {
  todos,
};

const store = configureStore({
  reducer,
});

export default store;
