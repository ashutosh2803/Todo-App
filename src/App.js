import React, { Component } from "react";
import { TaskList } from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <img style={{width: '30%'}} src="/app_logo.png" alt="app_logo" />
        <TaskList />
      </div>
    );
  }
}

export default App;
