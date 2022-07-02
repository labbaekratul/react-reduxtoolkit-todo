import React from "react";
import InputBox from "../components/InputBox";
import Todos from "../components/Todos";
import Topbar from "../components/Topbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="container todo-body">
        <InputBox />
        <Todos />
      </div>
    </div>
  );
};

export default Home;
