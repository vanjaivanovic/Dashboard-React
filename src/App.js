import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todays Weather in Stockholm</h1>
          <Weather/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;