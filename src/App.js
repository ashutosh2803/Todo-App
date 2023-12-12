import React from "react";
import { TaskList } from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = () => {
  return (
      <div className="App">
        <img style={{width: '30%'}} src="/app_logo.png" alt="app_logo" />
        <TaskList />
      </div>
    );
  }

export {App};
