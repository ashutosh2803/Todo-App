import React, { Component } from "react";
import { TaskList } from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="display-1">TODO</div>
        <TaskList />
      </div>
    );
  }
}

export default App;
