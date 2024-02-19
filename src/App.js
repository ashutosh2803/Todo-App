import React from "react";
import { TaskList } from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  return (
      <div className="App">
        <div style={{textAlign: "center"}}><img style={{width: '30%'}} src="/app_logo.png" alt="app_logo" /></div>
        {/* <TaskList /> */}
      <Register/>
      {/* <Login/> */}
      </div>
    );
  }

export {App};
