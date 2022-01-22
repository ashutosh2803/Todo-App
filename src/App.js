import React, { Component } from "react";
import { TaskList } from "./components/TaskList";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="todo">TODO</h1>
        <TaskList />
      </div>
    );
  }
}

export default App;
