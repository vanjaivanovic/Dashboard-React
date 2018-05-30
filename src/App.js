import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather.js';
import Clock from './components/Clock.js';
import Timer from './components/Timer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todays Weather in Stockholm</h1>
          <Weather />
        </header>
        <div className="container">
          <div className="row">

            <div className="col-xs-6 App-clock">
              <Clock />
            </div>

            <div className="col-xs-6 App-timer">
              <Timer />
            </div>

          </div>
        </div>


        
      </div>
    );
  }
}

export default App;
