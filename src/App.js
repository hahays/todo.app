import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { TodoContextProvider } from "./components/TodoContextProvider";

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <h1>To do app </h1>
        <TodoInput />
        <TodoList />
        <Footer />
      </div>
    </TodoContextProvider>
  );
}

export default App;
