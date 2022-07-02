import React from "react";
import Todo from "./Todo";
import "./Todos.css";

const Todos = () => {
  return (
    <div className="todos">
      <h1>List of Todos</h1>
      <Todo />
    </div>
  );
};

export default Todos;
