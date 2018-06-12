import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { connect } from 'react-redux';
import Game from '../Game';
import Profile from "../Profile";

class Layout extends Component {
  render() {
    let token = this.props.token;
    if (token) {
      return (
        <Switch>
          <Route path={ROUTES.GAME()} component={Game}/>
          <Route path={ROUTES.PROFILE()} component={Profile}/>
        </Switch>
      );
    } else {
        return <Redirect to={ROUTES.LOGIN()}/>;
    }
  }
}

const mapStateToProps = state => ({
  token: state.login.token
});

export default connect(mapStateToProps)(Layout);
