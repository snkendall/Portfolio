import React from 'react';
import FontAwesome from 'react-fontawesome';
import { withRouter } from 'react-router-dom';
import { Contact } from './';

const Home = () => {

  return (
    <div>
      <header className="App-header">
        <div className="logo-container">
          <FontAwesome
            className='fas fa-cog slow-spin images yellow-accent lrg-icon'
            name='headshotSpinner'
            size='5x' 
          />
          <img className="headshot images" src="./images/cropped.jpg" />
          <div className="logo-spacer" />
          <Contact />
        </div>
      </header> 
      <div className="text-border">
        <p className="App-intro">
          I'm a Full Stack Engineer. Amongst other things.
        </p>
        </div> 
    </div>
  );
  
}

export default withRouter(Home);