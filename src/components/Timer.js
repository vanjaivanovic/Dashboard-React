import React, { Component } from 'react';

class Timer extends Component {

  state = {
    secondsStartPoint: 0
  }

  showMinutes = () => {
    return Math.floor(this.state.secondsStartPoint / 60);
  }

   showSeconds = () => {
    return ('0' + this.state.secondsStartPoint % 60).slice(-2);
  }

  tick = () => {
    this.interval = setInterval(() => {
      this.setState({
        secondsStartPoint: (this.state.secondsStartPoint + 1)
    }) 
  }, 1000);
  }

  stopTimer = () => {
    clearInterval(this.interval);
  }

  resetTimer = () => {
    return this.setState({
      secondsStartPoint : (this.state.secondsStartPoint = 0)
    })
  }
  render() {
    return (
      <div>Timer: {this.showMinutes()} : {this.showSeconds()}
      <button className="startButton" onClick={this.tick}>Start</button>
      <button className="stopButton" onClick={this.stopTimer}>Stop</button>
      <button className="resetButton" onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
};

export default Timer;