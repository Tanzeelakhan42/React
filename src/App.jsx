import React from "react";
import TodoList from "./components/TodoList";

import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Todo List:-</h1>
      <TodoList item1="Eat" item2="Code" item3="Sleep" />
      {/* <TodoList todoitem="Eat" />
      <TodoList todoitem="Code" />
      <TodoList todoitem="Sleep" /> */}
    </div>
  );
};

export default App;
