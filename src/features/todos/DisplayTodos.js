import React from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "./todosSlice";

const DisplayTodos = () => {
  const todos = useSelector(selectTodos)

  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};

export default DisplayTodos;
