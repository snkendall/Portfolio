import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Home} from './components';
import App from './App';

/**
 * COMPONENT
 */
class Routes extends Component {

  render() {

    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </App>
      </Router>
    );
  }
}


export default Routes;
