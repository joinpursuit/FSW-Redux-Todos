import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addTodo } from '../actions'
import { addTodo } from './todosSlice'

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(
      input
    ))
    setInput("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} placeholder="Add todo" onChange={(e) => setInput(e.target.value)}/>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
