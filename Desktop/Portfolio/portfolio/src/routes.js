import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Home, About, Projects, Talks, Blog} from './components';
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
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/talks" component={Talks} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </App>
      </Router>
    );
  }
}


export default Routes;
