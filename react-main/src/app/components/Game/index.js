import React, { Component, Fragment, Button } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Board from '../Board';
import Move from '../Move';
import { selectSquare, selectHistory, getWinner } from '../../../redux/game/actions';
import user from '../../../images/user.svg';
import logout from '../../../images/singout.svg';
import actionCreatorsLogout from '../../../redux/logout/actions';
import { profile } from '../../../redux/profile/actions';

import styles from './styles.scss';

class Game extends Component {
  handleLogout = () => this.props.logout();

  handleProfile = () => this.props.profile();

  handleSquareClick = i => this.props.square(i);

  handleHistoryClick = step => this.props.historySelected(step);

  componentDidMount() {
    this.props.winner();
  }

  componentDidUpdate() {
    this.props.winner();
  }

  render() {
    const moves = this.props.history.map((step, move) => (
      <Move key={step} onClick={this.handleHistoryClick} move={move} />
    ));
    return (
      <Fragment>
        <div className={styles.topbar}>
          <img src={user} className={styles.profile} alt="new_page" onClick={this.handleProfile} />
          <p className={styles.tictactoe}>Tic Tac Toe</p>
          <img className={styles.logout} src={logout} alt="logout" onClick={this.handleLogout} />
        </div>
        <div className={styles.game}>
          <Board squares={this.props.history[this.props.current].squares} onClick={this.handleSquareClick} />
          <div className={styles.gameInfo}>
            <p className={styles.status}>{this.props.status}</p>
            <ol>{moves}</ol>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  history: state.game.history,
  isNext: state.game.xIsNext,
  current: state.game.stepNumber,
  status: state.game.status
});

const mapDispatchToProps = dispatch => ({
  square: i => dispatch(selectSquare(i)),
  historySelected: step => dispatch(selectHistory(step)),
  winner: () => dispatch(getWinner()),
  logout: () => {
    dispatch(actionCreatorsLogout.logout()), dispatch(push('/'));
  },
  profile: () => {
    dispatch(profile()), dispatch(push('/profile'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
