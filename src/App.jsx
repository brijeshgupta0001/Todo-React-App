import React from "react";
import "./App.css";
import AppName from "./Componant/AppName";
import AddTodo from "./Componant/AddTodo";
import TodoItems from "./Componant/Todoitems";
import WelcomeMessage from "./Componant/WelcomeMessage";
import TodoItemContextProvider from "./Store/todo-item-store";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems></TodoItems>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
