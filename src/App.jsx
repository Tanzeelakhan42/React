import React from "react";
import TodoList from "./components/TodoList";

import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Todo List:-</h1>
      <TodoList text="Eat" />
      <TodoList completed={true} text="Code" />
      <TodoList text="Sleep" />
    </div>
  );
};

export default App;
