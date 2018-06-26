import React from "react";
import ReactDOM from "react-dom";

import { Length } from "./Length.js";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: null,
      session: null
    };
  }

  componentDidMount() {
    this.setState({ break: 5, session: 25 });
  }

  increment = e => {
    e.preventDefault();
    e.target.id === "break-increment"
      ? this.setState({ break: this.state.break + 1 })
      : this.setState({ session: this.state.session + 1 });
  };

  decrement = e => {
    e.preventDefault();
    e.target.id === "break-decrement"
      ? this.setState({
          break: this.state.break === 0 ? 0 : this.state.break - 1
        })
      : this.setState({
          session: this.state.session === 0 ? 0 : this.state.session - 1
        });
  };

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <Length
          label="break-label"
          title="Break Length"
          decrementId="break-decrement"
          incrementId="break-increment"
          lengthId="break-length"
          length={this.state.break}
          increment={this.increment}
          decrement={this.decrement}
        />
        <Length
          label="session-label"
          title="Session Length"
          decrementId="session-decrement"
          incrementId="session-increment"
          lengthId="session-length"
          length={this.state.session}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
