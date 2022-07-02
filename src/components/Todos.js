import React from "react";
import Todo from "./Todo";
import "./Todos.css";
import { useSelector } from "react-redux";
import { FcEmptyTrash } from "react-icons/fc";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todos">
      <h1>List of Todos</h1>
      {todos.length > 0 ? (
        todos.map((item, i) => <Todo key={i} item={item} index={i} />)
      ) : (
        <div className="emptyIconArea">
          <FcEmptyTrash className="emptyIcon" />
          <p>Empty</p>
        </div>
      )}
    </div>
  );
};

export default Todos;
