import React from 'react'
// import Footer from './Footer'
import AddTodo from '../features/todos/AddTodo';
import DisplayTodos from '../features/todos/DisplayTodos';
import FilterBtn from '../features/filters/FilterTodos';
//import TodoList from '../features/todos/TodoArr';
// import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <DisplayTodos />
    <FilterBtn />
    {/* <TodoList/> */}
    {/* <VisibleTodoList />
    <Footer /> */}
  </div>
)

export default App
