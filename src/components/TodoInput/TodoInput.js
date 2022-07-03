import React, { useState, useContext } from "react";
import MainButton from "../buttons/MainButton/MainButton";
import { TodoContext } from "../../context/TodoContextProvider/TodoContextProvider";

import "./TodoInput.css";

export default function TodoForm() {
  const { todos, setTodos, randomColor } = useContext(TodoContext);
  const [todoName, setTodoName] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    const todoIndex = todos.length
      ? todos[todos.length - 1].id + 1
      : todos.length;
    setTodos([
      ...todos,
      { id: todoIndex, name: todoName, complete: false, color: randomColor() },
    ]);
    setTodoName("");
  };
  return (
    <form className="form-group" autoComplete="off" onSubmit={addTodo}>
      <input
        className="input-block card"
        type="text"
        name="todos"
        id="todos"
        required
        placeholder="What needs to be done?"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <MainButton className="buttonAdd" type="submit" text="Add" />
    </form>
  );
}
