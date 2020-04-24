import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Css/todoIndex.css";

import { todosState } from "./todoSlice";
import { toggleTodo } from "./todoSlice";

const TodosIndex = () => {
  const todos = useSelector(todosState);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch(toggleTodo(e.target.id));
  };

  return (
    <ul onClick={clickHandler}>
      {todos.map((todo) => {
        return todo.completed ? (
          <li className="line" key={todo.id} id={todo.id}>
            {todo.text}
          </li>
        ) : (
          <li key={todo.id} id={todo.id}>
            {todo.text}
          </li>
        );
      })}
    </ul>
  );
};

export default TodosIndex;
