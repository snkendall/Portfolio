import React, { Component } from 'react';
import './App.css';
import FontAwesome from 'react-fontawesome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className="logo-container">
            <FontAwesome
              className='fas fa-cog slow-spin images'
              name='headshotSpinner'
              size='10x' 
            />
            <img className="headshot images" src="./images/cropped.jpg" />
          </div>
          {/* <h1 className="App-title">Oh Hello</h1> */}
        </header>
        <p className="App-intro">
          I'm a Full Stack Engineer. Amongst other things.
        </p>
      </div>
    );
  }
}

export default App;
