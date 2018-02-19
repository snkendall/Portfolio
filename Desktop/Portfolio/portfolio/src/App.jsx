import React, { Component } from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar } from './components';
//import Menu from './components/Menu';

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Navbar />
        {children}
      </div>  
    );
  }
}


export default withRouter(App);
/**
 * PROP TYPES
 */
// App.propTypes = {
//   children: PropTypes.object,
// };


