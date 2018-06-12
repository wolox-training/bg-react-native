import React, { Component, Fragment } from 'react';
import styles from './styles.scss';
import user from '../../../images/user.svg';

class ProfileLayout extends Component {
  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.profile}>
          <img src={user} className={styles.photo} alt="profile"/>
          <label className={styles.data}>Name: Brian Gerez</label>
          <label className={styles.data}>Age: 25</label>
          <label className={styles.data}>You win: 6</label>
        </div>
      </div>
    );
  }
}

export default ProfileLayout;
