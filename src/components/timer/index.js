import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: this.props.initial,
    };
    this.counter = null;
  }

  componentDidMount() {
    this.counter = setInterval(() => {
      this.setState({ timer: this.state.timer - 1 });
    }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.counter);
  };
  componentDidUpdate() {
    if (this.state.timer === 0) {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
        <div className="timer-value" data-testid="timer-value">
          {this.state.timer}
        </div>
        <button
          className="large"
          data-testid="stop-button"
          onClick={this.stopTimer}
        >
          Stop Timer
        </button>
      </div>
    );
  }
}
