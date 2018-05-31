import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather.js';
import Clock from './components/Clock.js';
import Timer from './components/Timer.js';
import Currency from './components/Currency.js';
import Postit from './components/Postit.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
            <div className="col-xs-12 col-sm-offset-5 col-sm-3 App-sticky-note">
              <Postit />
            </div>
           </div> 

           <div className="row"> 
             <div className="col-xs-6 App-clock">
                <Clock />
              </div>
 
            <div className="col-xs-6 App-timer">
              <Timer />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-offset-4 col-sm-4 App-currency">
              <Currency />
            </div>
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;
