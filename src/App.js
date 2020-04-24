import React from "react";
import Footer from "./features/VisibilityFeatures/Footer";
import Todo from "./features/TodoFeatures/Todo";

import "./Css/app.css";

const App = () => (
  <div className="App">
    <Todo />

    <Footer />
  </div>
);

export default App;
