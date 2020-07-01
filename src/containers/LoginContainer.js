import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../components/Login/Login';

const LoginContainer = () => (
  <div className="container">
    <Route exact path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
  </div>
);

export default LoginContainer;
