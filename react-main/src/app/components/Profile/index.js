import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import user from '../../../images/user.svg';
import styles from './styles.scss';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile: {this.props.email}</h1>
        <img src={user} className={styles.photo} alt="new_page"/>
        <label>Name</label>
        <label>Score</label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  email: state.login.email
});

export default connect (mapStateToProps)(Profile);
