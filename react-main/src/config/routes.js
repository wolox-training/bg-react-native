import React, { Component } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../redux/store';
import Game from '../app/components/Game';
import Login from '../app/components/Login';
import Score from '../app/components/Score';

export const ROUTES = {
  GAME: () => '/game',
  LOGIN: () => '/',
  SCORE: () => '/score'
};

function Layout(token) {
  return token==='' ? <Redirect to={ROUTES.LOGIN()}/> : <Route path={ROUTES.GAME()} component={Game}/>;
}

function Layout2(token) {
  return token==='' ? <Redirect to={ROUTES.LOGIN()}/> : <Route path={ROUTES.SCORE()} component={Score}/>;
}

function AppRoutes(props) {
  let {token} = props;
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={ROUTES.LOGIN()} component={Login}/>
        <Route path={ROUTES.SCORE()} comp onent={()=>Layout2(token)}/>
        <Route path={ROUTES.GAME()} component={()=>Layout(token)}/>
      </Switch>
    </Router>
  );
}

const mapStateToProps = state => ({
  token: state.login.token
});

export default connect (mapStateToProps, {})(AppRoutes);
