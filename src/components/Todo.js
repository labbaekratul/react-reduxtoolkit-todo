import React, { useState } from "react";
import "./Todos.css";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todos/todoSlice";

const Todo = ({ item, index }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [editValur, setEditValue] = useState({});

  const editTodo = (id) => {
    const getTodo = todos.find((x) => x.id === id);
    setEditValue(getTodo);
  };

  const updateTods = (data) => {
    dispatch(updateTodo(data));
    setEditValue({});
  };

  return (
    <div className="single-todo">
      <div className="single-todo-fields">
        <div className="todo">
          {editValur.id ? (
            <>
              <input
                type="text"
                className="editInput"
                value={editValur.task}
                onChange={(e) =>
                  setEditValue({ ...editValur, task: e.target.value })
                }
              />
              <button
                className="updateBtn"
                onClick={() => updateTods(editValur)}
              >
                UPDATE
              </button>
            </>
          ) : (
            <>
              <span>{index + 1}.</span>
              <p>{item.task}</p>
            </>
          )}
        </div>
        <div className="edit-delete">
          <span onClick={() => editTodo(item.id)}>
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
