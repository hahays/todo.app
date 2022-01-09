import React, { useState, useEffect, createContext } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const deleteTodo = (id) => {
    const deleteArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(deleteArr);
  };

  const deleteCompletedTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });

    setTodos(newTodos);
  };

  const handleEditTodos = (editvalue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.name = editvalue;
      }
    });
    setTodos(newTodos);
  };

  const switchComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
    });
    setTodos(newTodos);
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
      value={{
        todos,
        setTodos,
        deleteCompletedTodo,
        deleteTodo,
        handleEditTodos,
        switchComplete,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
