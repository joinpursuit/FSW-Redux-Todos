import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Css/todoIndex.css";

import { todosState } from "./todoSlice";
import { toggleTodo } from "./todoSlice";
import { visState } from "../VisibilityFeatures/visibilitySlice";

const TodosIndex = () => {
  const stateTodos = useSelector(todosState);
  const dispatch = useDispatch();
  const vis = useSelector(visState);
  const filteredTodos = (arr) => {
    if (vis === "Active") {
      return arr.filter((todo) => !todo.completed);
    }
    if (vis === "Completed") {
      return arr.filter((todo) => todo.completed);
    } else {
      return arr;
    }
  };

  let todos = filteredTodos(stateTodos);
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
