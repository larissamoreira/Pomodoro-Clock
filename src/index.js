import React from "react";
import ReactDOM from "react-dom";

import { Break } from "./Break.js";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: null
    };
  }

  componentDidMount() {
    this.setState({ break: 5 });
  }

  increment = () => {
    this.setState({ break: this.state.break + 1 });
  };

  decrement = () => {
    this.state.break === 0
      ? console.log("erro")
      : this.setState({ break: this.state.break - 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <Break
          break={this.state.break}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
