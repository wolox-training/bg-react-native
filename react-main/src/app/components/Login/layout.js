import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import styles from './styles.scss';

export const minLength = min => value =>
  value && value.length < min ? ` Must be ${min} characters or more` : undefined

const minLength8 = minLength(8)

const required = value => (value ? undefined : ' Required');

const renderField = ({
  input,
  placeholder,
  type,
  meta: {touched, error}
}) => (
  <div>
    <div>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
);

const FormInput = props => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={renderField}
            type="email"
            placeholder="example@gmail.com"
            validate={required}
           />
        </div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component={renderField}
            type="password"
            validate={[required, minLength8]}
          />
        </div>
        <button type="submit" className={styles.loginButton}>
          Submit
        </button>
      </div>
    </form>
  );
};

FormInput.propTypes = {
  handleSubmit: PropTypes.element
};

export default reduxForm({form: 'simple'})(FormInput)
