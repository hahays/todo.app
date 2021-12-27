import React from "react";
import FormInput from "./components/FormInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import { DataProvider } from "./components/DataProvider";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To do app </h1>
        <FormInput />
        <TodoList />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
