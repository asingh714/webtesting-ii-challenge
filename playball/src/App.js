import React, { Component } from "react";

import Display from "./Display/Display";
import Dashboard from "./Dashboard/Dashboard";

import "./App.css";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.balls === 3 && prevState.balls !== this.state.balls) {
      this.setState({ balls: 0, strikes: 0 });
    }
    if (prevState.strikes === 2 && prevState.strikes !== this.state.strikes) {
      this.setState({ balls: 0, strikes: 0 });
    }
  };

  handleBall = () => {
    this.setState(prevState => {
      return {
        balls: prevState.balls + 1
      };
    });
  };

  handleStrike = () => {
    this.setState(prevState => {
      return {
        strikes: prevState.strikes + 1
      };
    });
  };

  handleFoul = () => {
    if (this.state.balls < 3) {
      this.setState(prevState => {
        return {
          balls: prevState.balls + 1
        };
      });
    }
  };

  handleHit = () => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Play Ball!</h1>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard
          handleBall={this.handleBall}
          handleStrike={this.handleStrike}
          handleFoul={this.handleFoul}
          handleHit={this.handleHit}
        />
      </div>
    );
  }
}

export default App;
