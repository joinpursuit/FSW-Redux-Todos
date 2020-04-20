import React from 'react'
import Footer from './Footer'
import AddTodo from '../features/toDoFeature/AddTodo'
// import VisibleTodoList from '../features/visibilityFeature/VisibleTodoList'
import TodoList from '../features/toDoFeature/TodoList'

const App = () => (
  <div>

    <AddTodo />
    <TodoList />
    {/* <VisibleTodoList /> */}
    <Footer />
  </div>
)

export default App
