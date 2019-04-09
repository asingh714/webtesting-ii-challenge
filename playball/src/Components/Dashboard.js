import React from "react";

import Display from "./Display";

class Dashboard extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  handleBall = () => {
    if (this.state.balls === 3) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    } else {
      this.setState(prevState => {
        return {
          balls: prevState.balls + 1
        };
      });
    }
  };

  handleStrike = () => {
    if (this.state.strikes === 2) {
      this.setState({
        balls: 0,
        strikes: 0
      });
    } else {
      this.setState(prevState => {
        return {
          strikes: prevState.strikes + 1
        };
      });
    }
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
        <Display pitchCount={this.state} />

        <button onClick={this.handleStrike} data-testid="strikeButton">
          Strike
        </button>
        <button onClick={this.handleBall} data-testid="ballButton">
          Ball
        </button>
        <button onClick={this.handleFoul} data-testid="foulButton">
          Foul
        </button>
        <button onClick={this.handleHit} data-testid="hitButton">
          Hit
        </button>
      </div>
    );
  }
}

export default Dashboard;
