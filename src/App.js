import React, { Component } from "react";
import { TaskList } from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { TaskListClone } from "./components/TaskListClone";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="display-1 fw-bold">TODO</div>
        <TaskList />
        {/* <TaskListClone/> */}
      </div>
    );
  }
}

export default App;
