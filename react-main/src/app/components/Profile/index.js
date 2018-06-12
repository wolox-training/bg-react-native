import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TopbarProfile from '../TopbarProfile';
import ProfileLayout from './layout';
import { goback } from '../../../redux/goBack/actions';
import actionCreatorsLogout from '../../../redux/logout/actions';

class Profile extends Component {
  handleGame = () => (this.props.goback());

  handleLogout = () => (this.props.logout());

  render() {
    return (
      <Fragment>
        <TopbarProfile email={this.props.email} onClick={this.handleGame} handleLogout={this.handleLogout}/>
        <ProfileLayout />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  email: state.login.email
});

const mapDispatchToProps = dispatch => ({
  goback: () => dispatch(goback(dispatch)),
  logout: () => dispatch(actionCreatorsLogout.logout(dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
