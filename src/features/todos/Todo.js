import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "./todosSlice";

const TodoList = ({ allTodos }) => {
  const dispatch = useDispatch();
  let todoArr = allTodos.map((todo) => {

  
    return (
      <li key={todo.id} value={todo.id}
        style={todo.completed ? { textDecoration: "line-through" } : {}}
        onClick={e => dispatch(toggleTodo(e.currentTarget.value))}>
        {todo.text}
      </li>
    )
  })
  return (
    <ul>{todoArr}</ul>
  )
}
export default TodoList;
