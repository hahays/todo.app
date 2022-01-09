import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import TodoListDone from "./components/TodoListDone";
import { TodoContextProvider } from "./components/TodoContextProvider";

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <h1>To do app </h1>
        <TodoInput />
        <div className="todoTable">
          <TodoList />
          <TodoListDone />
        </div>
        <Footer />
      </div>
    </TodoContextProvider>
  );
}

export default App;
