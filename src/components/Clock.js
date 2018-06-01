import React, { Component } from 'react';

class Clock extends Component{
  state = {
    time: new Date()
  }

componentDidMount() {
  setInterval( () => this.updateTime(), 1000);
}

updateTime = () => {
  this.setState({time: new Date()});
}

render() {
  return (<div className="time" >

  <p className="clock">{this.state.time.toLocaleTimeString()}</p>
    </div>)
}


}

export default Clock;

