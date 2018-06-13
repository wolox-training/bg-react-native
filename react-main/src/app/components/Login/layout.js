import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import styles from './styles.scss';
import RenderField from '../RenderField';

export const minLength = min => value =>
  value && value.length < min ? ` Must be ${min} characters or more` : undefined;

const minLength8 = minLength(8);

function required(value) {
  return value ? undefined : ' Required';
}

function FormInput(props) {
  const { handleSubmit } = props;
  const validate = [required, minLength8];
  return (
    <div className={styles.divForm}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Tic Tac Toe</h1>
        <label className={styles.labelLogin}>Email</label>
        <Field
          name="email"
          component={RenderField}
          type="email"
          placeholder="example@gmail.com"
          validate={required}
        />
        <label className={styles.labelLogin}>Password</label>
        <Field
          name="password"
          component={RenderField}
          type="password"
          validate={validate}
        />
        <button type="submit" className={styles.loginButton}>Submit</button>
      </form>
    </div>
  );
}

FormInput.propTypes = {
  handleSubmit: PropTypes.element
};

export default reduxForm({ form: 'simple' })(FormInput);
