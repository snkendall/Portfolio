import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Home, About} from './components';
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
            <Route exact path="/about" component={About} />
          </Switch>
        </App>
      </Router>
    );
  }
}


export default Routes;
