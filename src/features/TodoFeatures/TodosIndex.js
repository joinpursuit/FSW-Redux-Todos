import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { todosState } from "./todoSlice";
import { toggleTodo } from "./todoSlice";

const TodosIndex = () => {
  const todos = useSelector(todosState);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch(toggleTodo(e.target.id));
  };
  console.log(todos);

  const li = (todos) => {
    return todos.map((todo) => {
      return (
        <li key={todo.id} id={todo.id}>
          {todo.text}
        </li>
      );
    });
  };

  return <ul onClick={clickHandler}> </ul>;
};

export default TodosIndex;
