import React, { Component } from 'react';

class Weather extends Component {

  state = {
    WeatherTemp: []
  }

    componentDidMount() {
      this.fetchWeatherAPI();
    }

    fetchWeatherAPI = () => {
      fetch('http://api.openweathermap.org/data/2.5/forecast?units=metric&id=2673722&APPID=4f502c7585fdee15f137e563517e9086')
      .then(response => response.json())
      .then((data) => {
        this.setState({WeatherTemp: (data.list[0].main.temp).toFixed(0)})
        console.log(data.list[0].main.temp);
      

      })

      .catch(error => {
        console.log(error);
      })

    }

  render() {
    return (<p className="weatherStyle">{this.state.WeatherTemp}°C</p>)
  }

}

export default Weather;