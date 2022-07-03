import React from "react";
import "./TodoList.css";

function TodoList({ className, children }) {
  return (
    <div className={`todoList todoList${className} card`}>
      <ul className="todoCard">{children}</ul>
    </div>
  );
}

export default TodoList;
