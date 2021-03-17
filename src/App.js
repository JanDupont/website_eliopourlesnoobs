import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages';
import Datenschutz from './components/Signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/datenschutz" component={Datenschutz} />
      </Switch>
    </Router>
  );
}

export default App;
