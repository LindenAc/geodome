import React, { Component } from 'react';
import './App.css';
import MainPageComp from './Components/MainPageComp';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }  

  render() {
    return (
      <div className="App">
        <h1> Capital Hill - Geodome Project </h1>

        <header className="App-header">
          <MainPageComp />
        </header>
       
        <p>
        Be Green. Grow Tall.
        </p>

      </div>
    );
  }
}

export default App;
