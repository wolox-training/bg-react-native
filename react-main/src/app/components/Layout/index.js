import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { connect } from 'react-redux';
import Game from '../Game';

class Layout extends Component {
  render() {
    debugger;
    let auth = this.props.auth;
    return auth ? <Route path={ROUTES.GAME()} component={Game}/> : <Redirect to={ROUTES.LOGIN()}/>;
  }
}

const mapStateToProps = state => ({
  auth: state.login.auth,
  token: state.login.token
});

export default connect (mapStateToProps)(Layout);
