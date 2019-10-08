import React, { Component } from "react";
import "./App.css";
import axios from "axios";

// Class has access to state and lifecycle methods; function components do unless you use hooks

class App extends Component {
  state = {
    todos: [],
    message: ""
  };

  componentDidMount() {
    axios.get("http://localhost:8000/api/message").then(res => {
      this.setState({
        ...this.state,
        message: res.data
      });
    });
  }

  render() {
    return (
      <>
        <div>FS APP</div>
        <div>Message: {this.state.message}</div>
      </>
    );
  }
}

export default App;
