import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../redux/store';
import Game from '../app/components/Game';
import Login from '../app/components/Login';

export const ROUTES = {
  GAME: () => '/game',
  LOGIN: () => '/'
};

function AppRoutes() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={ROUTES.LOGIN()} component={Login} />
        <Route path={ROUTES.GAME()} component={Game} />
      </Switch>
    </ConnectedRouter>
  );
}

export default AppRoutes;
