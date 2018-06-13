import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionCreators from '../../../redux/login/actions';
import Login from './layout';

class LoginContainer extends Component {
  handleSubmit = values => this.props.login(values);

  render() {
    return (
      <Login isLoading={this.props.loading} onSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = state => ({
  token: state.login.token,
  loading: state.login.loading
});

const mapDispatchToProps = dispatch => ({
  login: (credentials) => dispatch(actionCreators.login({ email: credentials.email, password: credentials.password }))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
