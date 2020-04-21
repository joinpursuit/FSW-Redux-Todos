import React from 'react'
import Footer from './Footer'
import AddTodo from '../features/toDoFeature/AddTodo'
import TodoList from '../features/toDoFeature/TodoList'

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)

export default App
