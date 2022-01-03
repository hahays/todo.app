import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoContext } from "./TodoContextProvider";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodoContext);

  const switchComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
  };

  const handleEditTodos = (editvalue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editvalue;
      }
    });
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          id={index}
          switchComplete={switchComplete}
          handleEditTodos={handleEditTodos}
        />
      ))}
    </ul>
  );
}
