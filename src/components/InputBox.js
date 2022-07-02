import React from "react";
import "./InputBox.css";

const InputBox = () => {
  return (
    <div className="inputBox">
      <div className="todobar shadow">
        <input type="text" placeholder="Enter Task" />
        <button>ADD</button>
      </div>
    </div>
  );
};

export default InputBox;
