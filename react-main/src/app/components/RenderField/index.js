import React, { Component } from 'react';
import styles from './styles.scss'

class RenderField extends Component {
  render() {
    const { input, placeholder, type, meta: { touched, error } } = this.props;
    return (
      <div className={styles.field}>
        <input {...input} placeholder={placeholder} type={type}/>
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
}

export default RenderField;