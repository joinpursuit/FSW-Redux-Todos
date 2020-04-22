import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../toDoFeature/toDoSlice'

const AddTodo = ({ dispatch }) => {
  // const [ todo, setTodo ] = useState({})
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo({text: input.value, completed: false}))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
