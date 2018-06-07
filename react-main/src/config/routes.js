import React, { Component } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../redux/store';
import Game from '../app/components/Game';
import Login from '../app/components/Login';

export const ROUTES = {
  GAME: () => '/game',
  LOGIN: () => '/'
};

function Layout(auth) {
  return auth ? <Route path={ROUTES.GAME()} component={Game}/> : <Redirect to={ROUTES.LOGIN()}/>;
}

function AppRoutes(props) {
  let {auth} = props;
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={ROUTES.LOGIN()} component={Login}/>
        <Route path={ROUTES.GAME()} component={()=>Layout(auth)}/>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  auth: state.login.auth,
  token: state.login.token
});

export default connect (mapStateToProps, {})(AppRoutes);
