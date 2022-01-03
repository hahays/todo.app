import React, { useState, useEffect, createContext } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [allCheck, setAllCheck] = useState(false);
  const [todos, setTodos] = useState([]);

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });

    setTodos(newTodos);
    setAllCheck(false);
  };

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem("todoStore"));
    if (todoStore) setTodos(todoStore);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoStore", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, deleteTodo, allCheck, setAllCheck }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
