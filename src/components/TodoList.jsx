import React from "react";
import "../components/styles/todolist.styles.css";
const TodoList = ({ text, completed }) => {
  return (
    <li>
      {completed ? <></> : <input type="checkbox" />}
      <span>{text}</span>
    </li>
  );
};
export default TodoList;
