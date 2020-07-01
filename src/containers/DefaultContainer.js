import React from 'react';
import { Route } from 'react-router-dom';
import Match from '../components/match/Match';
import Matches from '../components/matches/Matches';

const DefaultContainer = () => (
  <div>
    <div className="container">
      {/* <Navbar /> */}
      <p>Navbar goes here</p>
      <Route path="/match" component={Match} />
      <Route path="/matches" component={Matches} />
    </div>
  </div>
);

export default DefaultContainer;
