import React from "react";
import "../components/styles/todolist.styles.css";

const TodoList = () => {
  return (
    <ul>
      <li>
        <input type="checkbox" />
        <span>Eat</span>
      </li>
      <li>
        <input type="checkbox" />
        <span>Code</span>
      </li>
      <li>
        <input type="checkbox" />
        <span>Sleep</span>
      </li>
    </ul>
  );
};
export default TodoList;
