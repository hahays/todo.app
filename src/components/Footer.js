import React, { useContext } from "react";
import { TodoContext } from "./TodoContextProvider";

export default function Footer() {
  const { todos, setTodos, deleteAllTodo } = useContext(TodoContext);

  const roma = "( -    ____    - )";
  const allChecked = todos.every((todo) => todo.complete);
  const handleCheckAll = () => {
    const newTodos = [...todos];

    newTodos.forEach((todo) => {
      todo.complete = !allChecked;
    });
    setTodos(newTodos);
  };

  return (
    <>
      {todos.length === 0 ? (
        <h1 className>Наконец-то ты фсе сделала {roma} </h1>
      ) : (
        <div className="row">
          <label htmlFor="all">
            <input
              type="checkbox"
              name="all"
              id="all"
              onClick={handleCheckAll}
              checked={allChecked}
            />
            All
          </label>
          <button id="delete" onClick={deleteAllTodo}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}
