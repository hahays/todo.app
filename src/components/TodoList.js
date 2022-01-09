import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoContext } from "./TodoContextProvider";

export default function TodoList() {
  const { todos, deleteTodo, switchComplete, handleEditTodos } =
    useContext(TodoContext);

  const showDoneTodos = todos.filter((todo) => todo.complete);
  const showActiveTodos = todos.filter((todo) => !todo.complete);

  return (
    <div className="todoTable">
      <ul>
        <h1>Active</h1>
        {showActiveTodos.map((todo) => (
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
      <ul>
        <h1>Done</h1>
        {showDoneTodos.map((todo) => (
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
    </div>
  );
}
