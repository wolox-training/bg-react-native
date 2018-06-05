import React, { Component } from 'react';
import FormInput from './layout';
import { connect } from 'react-redux';
import { getToken } from '../../../redux/login/actions';

class Login extends Component {
  handleSubmit = values => (
    this.props.token(values)
  )

  render() {
    return (
      <FormInput onSubmit={this.handleSubmit} />
    );
  }
}

const mapStateToProps = state => ({
  values: state.values
})

const mapDispatchToProps = dispatch => ({
  token: (values) => dispatch(getToken(values.email, values.pass))
})

export default connect (mapStateToProps, mapDispatchToProps)(Login);

//<Component handleSubmit={this.handleSubmit} />

/*<Fragment>
      <label className={styles.login}>Email</label>
      <Field name='email' component={TextInput}/>
      <label className={styles.login}>Password</label>
      <Field name='password' component={PasswordInput}/>
      <Field name='submit' component={}/>
    </Fragment>
*/