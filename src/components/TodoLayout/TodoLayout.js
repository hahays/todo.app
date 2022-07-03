import React, { useContext } from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { TodoContext } from "../../context/TodoContextProvider/TodoContextProvider";
import BadgeCard from "../BadgeCard/BadgeCard";
import TodoList from "../TodoList/TodoList";

import "./TodoLayout.css";

export default function TodoLayout() {
  const { todos, deleteTodo, switchComplete, handleEditTodos } =
    useContext(TodoContext);

  const showDoneTodos = todos.filter((todo) => todo.complete);
  const showActiveTodos = todos.filter((todo) => !todo.complete);

  return (
    <div className="row">
      <div className="todoListContainer">
        <BadgeCard className="secondary" text="Active" />
        <TodoList className="Active">
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
        </TodoList>
      </div>
      <div className="todoListContainer">
        <BadgeCard className="success" text="Done" />
        <TodoList className="Done">
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
        </TodoList>
      </div>
    </div>
  );
}
