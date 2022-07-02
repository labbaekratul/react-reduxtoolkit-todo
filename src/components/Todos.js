import React from "react";
import Todo from "./Todo";
import "./Todos.css";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todos">
      <h1>List of Todos</h1>
      {todos &&
        todos.map((item, index) => (
          <Todo key={item.id} item={item} index={index} />
        ))}
    </div>
  );
};

export default Todos;
