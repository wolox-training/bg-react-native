import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { ROUTES } from '../../../constants/routes';
import Game from '../Game';
import Profile from '../Profile';

class Layout extends Component {
  render() {
    const token = this.props.token;
    if (token) {
      return (
        <Switch>
          <Route path={ROUTES.GAME()} component={Game} />
          <Route path={ROUTES.PROFILE()} component={Profile} />
        </Switch>
      );
    }
    return <Redirect to={ROUTES.LOGIN()} />;
  }
}

const mapStateToProps = state => ({
  token: state.login.token
});

export default connect(mapStateToProps)(Layout);
