import React, { Component } from 'react';

class Currency extends Component {

  state = {
    exchangeRate: ''

  }

    componentDidMount() {
      this.fetchCurrencyAPI();
    }

    fetchCurrencyAPI = () => {
      fetch('http://www.apilayer.net/api/live?access_key=d110e947be5a421a93345033c583d606')
      .then(response => response.json())
      .then((data) => { 
          this.setState({ exchangeRate: data.quotes.USDSEK })
      })

      .catch(error => {
        console.log(error);
      })

    }

  render(){
    return (<div>
              <p>Todays rate</p>
              <p>1 USD = {this.state.exchangeRate} SEK</p>
           </div>
         )
      }
}

export default Currency;
      