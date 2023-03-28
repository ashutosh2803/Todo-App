import React, { Component } from "react";
import { TaskList } from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { TaskListClone } from "./components/TaskListClone";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <img style={{width: '20%'}} src="/app_logo.png" alt="app_logo" />
        <TaskList />
        {/* <TaskListClone/> */}
      </div>
    );
  }
}

export default App;
