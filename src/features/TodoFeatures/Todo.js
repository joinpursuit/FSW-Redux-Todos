import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import TodosIndex from "./TodosIndex";

let id = 1;
const Todo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        id,
        text: input,
        completed: false,
      })
    );
    id++;
    setInput("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <TodosIndex />
    </div>
  );
};

export default Todo;
