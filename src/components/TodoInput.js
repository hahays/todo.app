import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContextProvider";

export default function TodoForm() {
  const { todos, setTodos } = useContext(TodoContext);
  const [todoName, setTodoName] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
  };
  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        name="todos"
        id="todos"
        required
        placeholder="What need to be done?"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}