import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoContext } from "./TodoContextProvider";

export default function TodoList() {
  const { todos, deleteTodo, switchComplete, handleEditTodos } =
    useContext(TodoContext);

  const filter = (arr) => {
    const newArr = [...arr];
    return newArr.filter((todo) => todo.complete);
  };

  const visibleItems = filter(todos);

  return (
    <ul>
      <h1>Done</h1>
      {visibleItems.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          id={todo.id}
          switchComplete={switchComplete}
          handleEditTodos={handleEditTodos}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
