import React, { Component } from "react";
import "./App.css";

// Class has access to state and lifecycle methods; function components do unless you use hooks

class App extends Component {
  state = {
    todos: [],
    message: ""
  };

  componentDidMount() {}

  render() {
    return <div>FS APP</div>;
  }
}

export default App;
