import React, { Component } from 'react';
import './App.css';
import FontAwesome from 'react-fontawesome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <FontAwesome
              className='fas fa-cog slow-spin images yellow-accent'
              name='headshotSpinner'
              size='10x' 
            />
            <img className="headshot images" src="./images/cropped.jpg" />
          </div>
        </header>
        <div className='contact-container'>
          <a className="contact-button" href='mailto:snkendall@gmail.com'>
              <FontAwesome 
                className='fas fa-envelope contact-button'
                name='emailIcon'
                size='md'
              />
          </a>
          <a className="contact-button" href='https://github.com/snkendall'>
              <FontAwesome 
                className='fab fa-github contact-button'
                name='gitHubIcon'
                size='md'
              />
          </a>
          <a className="contact-button" href='https://www.linkedin.com/in/shannonkendall-/'>
              <FontAwesome 
                className='fab fa-linkedin contact-button'
                name='linkedInIcon'
                size='md'
              />
          </a>
          <a className="contact-button" href='https://stackoverflow.com/users/7964786/snkendall?tab=profile'>
              <FontAwesome 
                className='fab fa-stack-overflow contact-button'
                name='stackOverflowIcon'
                size='md'
              />
          </a>
          <a className="contact-button" href='https://twitter.com/snkendall_'>
              <FontAwesome 
                className='fab fa-twitter contact-button'
                name='twitterIcon'
                size='md'
              />
          </a>
        </div>  
        <p className="App-intro">
          I'm a Full Stack Engineer. Amongst other things.
        </p>
      </div>
    );
  }
}

export default App;
