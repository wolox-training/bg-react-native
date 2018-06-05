import React, { Component, Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
//import styles from './styles.scss';

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

const minLength8 = minLength(8)

const required = value => (value ? undefined : 'Required');

const FormInput = props => {

  const {handleSubmit} = props;
  return (

  <form onSubmit={handleSubmit}>
    <div>
      <label>Email</label>
      <div>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="example@gmail.com"
         />
      </div>
      <label>Password</label>
      <div>
        <Field
          name="password"
          component="input"
          type="password"
          required="required"
          validate={[required, minLength8]}
        />
      </div>
      <button type="submit">
        Submit
      </button>
      </div>
  </form>
  );
}

export default reduxForm({
    form: 'simple'
})(FormInput)






/*<label className={styles.login}>Email</label>
<Field name='email' component={TextInput}/>
<label className={styles.login}>Password</label>
<Field name='password' component={PasswordInput}/>
<Field name='submit' component={}/>*/