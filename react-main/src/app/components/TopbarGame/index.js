import React, { Component, Fragment } from 'react';
import styles from './styles.scss';
import user from '../../../images/user.svg';
import logout from '../../../images/singout.svg';

class TopbarGame extends Component {
  render() {
    return (
      <div className={styles.topbar}>
        <img src={user} className={styles.profile} alt="go-profile" onClick={this.props.handleProfile}/>
        <p className={styles.title}>Tic Tac Toe</p>
        <img className={styles.logout} src={logout} alt="logout" onClick={this.props.handleLogout}/>
      </div>
    );
  }
}

export default TopbarGame;
