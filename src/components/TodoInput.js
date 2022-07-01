import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContextProvider";

const randomColor = () => {
  const arrColor = ["red", "blue", "green", "yellow"];

  const randomNumber = Math.floor(Math.random() * 4);

  return arrColor[randomNumber];
};

export default function TodoForm() {
  const { todos, setTodos } = useContext(TodoContext);
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
        className="input-block"
        type="text"
        name="todos"
        id="todos"
        required
        placeholder="What need to be done?"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button className="buttonAdd" type="submit">
        Add
      </button>
    </form>
  );
}
