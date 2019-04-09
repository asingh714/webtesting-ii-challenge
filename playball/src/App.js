import React, { Component } from "react";

import Display from "./Display/Display";
import Dashboard from "./Dashboard/Dashboard";

import "./App.css";

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
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

  render() {
    return (
      <div className="App">
        <h1>Play Ball!</h1>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard
          handleBall={this.handleBall}
          handleStrike={this.handleStrike}
        />
      </div>
    );
  }
}

export default App;
