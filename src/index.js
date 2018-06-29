import React from "react";
import ReactDOM from "react-dom";

import { Length } from "./Length.js";
import { Session } from "./Session.js";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: null,
      session: null,
      seconds: 0,
      counter: false,
      time: 0
    };
  }

  componentDidMount() {
    this.setState({ break: 5, session: 25, time: 25 });
  }

  increment = e => {
    e.preventDefault();
    e.target.id === "break-increment" ?
      this.state.break === 60 ?
        console.log('NO MORE!')
        : this.setState({ break: this.state.break + 1 })
      : this.setState({ session: this.state.session + 1, time: this.state.time + 1 });
  };

  decrement = e => {
    e.preventDefault();
    e.target.id === "break-decrement" ?
      this.state.break === 0 ? console.log('no more!') :
        this.setState({
          break: this.state.break - 1
        })
      : this.state.session === 0 ? console.log('no more!') :
        this.setState({
          session: this.state.session - 1,
          time: this.state.time - 1
        });
  };

  tick = () => {
    let duration = this.state.time * 60;
    let timer = duration
    this.interval = setInterval(() => {

      this.setState({
        time: parseInt(timer / 60, 10),
        seconds: parseInt(timer % 60, 10)
      })

      if (--timer < 0) {
        timer = duration;
      }

    }, 1000);
  }

  pause = () => {
    clearInterval(this.interval)
  }

  stop = () => {
    clearInterval(this.interval)
    this.setState({ time: this.state.session, seconds: 0 })
  }

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div className="flexrow">
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
        <Session session={this.state.time} seconds={this.state.seconds} />
        <button id="start" onClick={this.tick}>Start</button>
        <button id="pause" onClick={this.pause}>Pause</button>
        <button id="stop" onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
