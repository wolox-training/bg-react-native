import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionCreators from '../../../redux/login/actions';

import FormInput from './layout';

class Login extends Component {
  handleSubmit = values => this.props.login(values);

  render() {
    return (
      <FormInput onSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = state => ({
  token: state.login.token
});

const mapDispatchToProps = dispatch => ({
  login: (credentials) => dispatch(actionCreators.login({ email: credentials.email, password: credentials.password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
