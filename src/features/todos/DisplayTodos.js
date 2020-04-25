import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTodos, toggleTodo } from "./todosSlice";

const DisplayTodos = () => {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()

  const handleToggle = e => {
    
    dispatch(toggleTodo(e.currentTarget.value))
  } 
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id} value={todo.id}
        style={todo.completed ? { textDecoration: "line-through" } : {}}
        onClick={handleToggle}>
        {todo.text}
      </li>;
      })}
    </ul>
  );
};

export default DisplayTodos;
