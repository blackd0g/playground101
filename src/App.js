import React, { Component } from 'react';
import logo from './pic/grass_t1.JPG';
import './App.css';
import Display from './Display'

class App extends Component {
  //<img src={logo} className="App-logo" alt="logo" />
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to plearn v.1.0.0.0.0.1</h2>
        </div>
        <Display />
      </div>
    );
  }
}

export default App;
