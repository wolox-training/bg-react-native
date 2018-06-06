import React, { Component } from 'react';
import FormInput from './layout';
import { connect } from 'react-redux';
import actionCreators from '../../../redux/login/actions';

class Login extends Component {
  handleSubmit = values => (
    this.props.login(values)
  );

  render() {
    return (
      <FormInput onSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = state => ({
  values: state.login.values
});

const mapDispatchToProps = dispatch => ({
  login: (credentials) => dispatch(actionCreators.login({email: credentials.email, password: credentials.password}))
});

export default connect (mapStateToProps, mapDispatchToProps)(Login);
