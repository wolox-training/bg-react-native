import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { history } from '../redux/store';
import Login from '../app/components/Login';
import Layout from '../app/components/Layout';
import { ROUTES } from '../constants/routes';

function AppRoutes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={ROUTES.LOGIN()} component={Login}/>
        <Route path={ROUTES.GAME()} component={Layout}/>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
