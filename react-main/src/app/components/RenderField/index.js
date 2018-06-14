import React, { Component } from 'react';
import styles from './styles.scss'

function RenderField({ input, placeholder, type, meta: { touched, error } })
{
  return (
    <div className={styles.field}>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  )
}

export default RenderField;
