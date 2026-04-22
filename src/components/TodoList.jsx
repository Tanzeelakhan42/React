import React from "react";
import "../components/styles/todolist.styles.css";

const TodoList = ({ item1, item2, item3 }) => {
  return (
    <ul>
      <li>
        <input type="checkbox" />
        <span>{item1}</span>
      </li>
      <li>
        <input type="checkbox" />
        <span>{item2}</span>
      </li>
      <li>
        <input type="checkbox" />
        <span>{item3}</span>
      </li>
    </ul>
  );
};
export default TodoList;
