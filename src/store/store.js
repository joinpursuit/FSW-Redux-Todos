import { configureStore } from "@reduxjs/toolkit";
import todos from '../reducers/todos';
import visibilityFilter from '../reducers/visibilityFilter';

const reducer = {
    todos,
    visibilityFilter
};

const store = configureStore({
    reducer
});

export default store;