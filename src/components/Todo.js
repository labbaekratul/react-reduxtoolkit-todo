import React from "react";
import "./Todos.css";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todos/todoSlice";

const Todo = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="single-todo">
      <div className="single-todo-fields">
        <div className="todo">
          <input type="checkbox" />
          <p>{item.task}</p>
        </div>
        <div className="edit-delete">
          <span onClick={() => dispatch(updateTodo(item.id))}>
            <BsPencilSquare />
          </span>
          <span onClick={() => dispatch(deleteTodo(item.id))}>
            <BsTrash />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
