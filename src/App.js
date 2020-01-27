import React from 'react';

import Login from './containers/login/Login';
import Timeline from './containers/login/Timeline/Timeline';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/timeline" component={Timeline} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;