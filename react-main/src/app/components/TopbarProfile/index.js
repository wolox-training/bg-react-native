import React, { Component, Fragment } from 'react';
import styles from './styles.scss';
import logout from '../../../images/singout.svg';
import toPlay from '../../../images/toPlay.svg';

class TopbarProfile extends Component {
  render() {
    return (
      <div className={styles.topbar}>
        <img src={toPlay} className={styles.toplay} alt="To Play!" onClick={this.props.onClick}/>
        <p className={styles.title}>Profile</p>
        <img className={styles.logout} src={logout} alt="logout" onClick={this.props.handleLogout} />
      </div>
    );
  }
}

export default TopbarProfile;
