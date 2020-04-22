import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { toggleTodo } from './toDoSlice'
import { useSelector } from 'react-redux'
console.log(useSelector)
const TodoList = () => {

const todos = useSelector(state => state.todos)
debugger
 return ( 
  <ul> 
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>

)
    }

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   toggleTodo: PropTypes.func.isRequired
// }

export default TodoList
