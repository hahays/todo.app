import React from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoLayout from "./components/TodoLayout/TodoLayout";
import Footer from "./components/Footer/Footer";
import { TodoContextProvider } from "./context/TodoContextProvider/TodoContextProvider";

import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <Header name="To do app" />
        <TodoInput />
        <TodoLayout />
        <Footer />
      </div>
    </TodoContextProvider>
  );
}

export default App;
