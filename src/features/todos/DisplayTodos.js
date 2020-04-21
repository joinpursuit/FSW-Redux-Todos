import React from "react";
import Todo from "../../components/Todo";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./todosSlice";

const DisplayTodos = () => {
  const todos = useSelector((state) => {
    {
      state.todos;
    }
  });
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo}</li>;
      })}
    </ul>
  );
};

export default DisplayTodos;
