import React from "react";
import Footer from "./Footer";
import Todo from "../features/TodoFeatures/Todo";
// import AddTodo from "../containers/AddTodo";
// import VisibleTodoList from "../containers/VisibleTodoList";
import "../Css/app.css";

const App = () => (
  <div className="App">
    <Todo />

    <Footer />
  </div>
);

export default App;
