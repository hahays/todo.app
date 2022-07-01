import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoContext } from "./TodoContextProvider";

export default function TodoList() {
  const { todos, deleteTodo, switchComplete, handleEditTodos } =
    useContext(TodoContext);

  const showDoneTodos = todos.filter((todo) => todo.complete);
  const showActiveTodos = todos.filter((todo) => !todo.complete);

  return (
    <div className="row">
      <ul>
        <span className="badge secondary">Active</span>
        <div className="todoList">
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
        </div>
      </ul>
      <ul>
        <span className="badge success">Done</span>
        <div className="todoList">
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
        </div>
      </ul>
    </div>
  );
}
