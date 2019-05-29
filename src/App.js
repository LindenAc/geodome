import React, { Component } from 'react';
import './App.css';
import MainPageComp from './MainPageComp';

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
        <div className = 'pageBottom'>
            <b style = {{ color:"green" }}>
            Be Green. Grow Tall.
            </b>
        </div>
      </div>
      
    );
  }
}

export default App;
