import React from "react";
import "./Todos.css";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

const Todo = () => {
  return (
    <div className="single-todo">
      <div className="single-todo-fields">
        <div className="todo">
          <input type="checkbox" />
          <p>This is the First Todo</p>
        </div>
        <div className="edit-delete">
          <span>
            <BsPencilSquare />
          </span>
          <span>
            <BsTrash />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
