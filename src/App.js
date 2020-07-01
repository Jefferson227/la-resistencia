import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import DefaultContainer from './containers/DefaultContainer';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/(login)" component={LoginContainer} />
          <Route component={DefaultContainer} />
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
