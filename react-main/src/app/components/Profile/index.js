import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import user from '../../../images/user.svg';
import styles from './styles.scss';

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.topbar}>
          <h1>Profile</h1>
        </div>
        <div className={styles.layout}>
          <div className={styles.profile}>
            <img src={user} className={styles.photo} alt="new_page"/>
            <label className={styles.data}>Username: {this.props.email}</label>
            <label className={styles.data}>Score: 6</label>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  email: state.login.email
});

export default connect (mapStateToProps)(Profile);
