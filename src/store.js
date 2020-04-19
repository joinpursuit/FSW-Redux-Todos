import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import todo from './features/Todo/TodoSlice';
import reducer from './reducers/index';


const middleware =[...getDefaultMiddleware(), logger]; 


const store = configureStore({
    reducer,
    middleware
})

export default store;