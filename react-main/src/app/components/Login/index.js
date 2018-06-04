import React, { Component, Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import styles from './styles.scss';

import TextInput from './textInput';
import PasswordInput from './passwordInput';




const Login = () => {
    handleSubmit = (values) => (
        console.log(values)
    )
  return (
      <form onSubmit={this.handleSubmit}>
          <div>
              <label>First Name</label>
              <div>
                  <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="First Name"
                  />
              </div>
          </div>
      </form>
   );
}



export default reduxForm({ form: 'signIn' })(Login);



//<Component handleSubmit={this.handleSubmit} />

//desde el index mando esto al layout.

/*<Fragment>
      <label className={styles.login}>Email</label>
      <Field name='email' component={TextInput}/>
      <label className={styles.login}>Password</label>
      <Field name='password' component={PasswordInput}/>
      <Field name='submit' component={}/>
    </Fragment>
    */