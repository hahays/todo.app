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
        <h2>Active</h2>
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
        <h2>Done</h2>
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
