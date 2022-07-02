import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
import "./InputBox.css";

const InputBox = () => {
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState("");

  const addNewTodo = () => {
    if (!tasks) {
      alert("Please write your task to submit");
    } else {
      dispatch(addTodo(tasks));
      setTasks("");
    }
  };

  return (
    <div className="inputBox">
      <div className="todobar shadow">
        <input
          type="text"
          placeholder="Enter Task"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />
        <button onClick={addNewTodo}>ADD</button>
      </div>
    </div>
  );
};

export default InputBox;
