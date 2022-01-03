import React, { useContext } from "react";
import { TodoContext } from "./TodoContextProvider";

export default function Footer() {
  const { todos, setTodos, deleteTodo, allCheck, setAllCheck } =
    useContext(TodoContext);

  const roma = "( -    ____    - )";
  const handleCheckAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !allCheck;
    });
    setTodos(newTodos);
    setAllCheck(!allCheck);
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
              checked={todos.every((todo) => todo.complete)}
            />
            All
          </label>
          <button id="delete" onClick={deleteTodo}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}
