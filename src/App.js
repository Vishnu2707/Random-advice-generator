import React from 'react';
import axios from 'axios';
import "./App.css";

class App extends React.Component{
  state = {
    advice : '',
  }

  componentDidMount() {
    this.fetchQuote();
  }
  

  fetchQuote = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const {advice}  = response.data.slip;     /* or for fetching .... response.data.slip.advice */
        this.setState({advice})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchQuote}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;