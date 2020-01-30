import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Components/Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      listedItems: [],
      userInput: ""
    };

  }

  handleUserInput = (value) => {
    this.setState({ userInput: value });
  }

  handleListedItems = () => {
    this.setState({
      listedItems: [...this.state.listedItems, this.state.userInput],
      userInput: ""
    });
  }

  render() {
    let list = this.state.listedItems.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            value={this.state.userInput}
            placeholder="Enter new task"
            onChange={e => this.handleUserInput(e.target.value)}
          />

          <button onClick={this.handleListedItems}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }
}

export default App
