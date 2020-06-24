import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Matches from './components/matches/Matches';
import Match from './components/match/Match';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/match">
            <Match />
          </Route>

          <Route path="/">
            <Matches />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
