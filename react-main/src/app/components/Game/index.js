import React, { Component, Fragment, Button } from 'react';
import Board from '../Board';
import Move from '../Move';
import { connect } from 'react-redux';
import { selectSquare, selectHistory, getWinner } from '../../../redux/game/actions';
import styles from './styles.scss';
import actionCreatorsLogout from '../../../redux/logout/actions';
import { score } from '../../../redux/score/actions';
import game from '../../../images/gamepad.svg';
import logout from '../../../images/singout.svg';

class Game extends Component {

  handleSquareClick = i => (
    this.props.square(i)
  );

  handleHistoryClick = step => (
    this.props.historySelected(step)
  );

  handleLogout = () => (
    this.props.logout()
  );

  handleScore = () => (
    this.props.score()
  );

  componentDidMount() {
    this.props.winner()
  };

  componentDidUpdate() {
    this.props.winner()
  };

  render() {
    const moves = this.props.history.map(
      (step, move) => (
        <Move key={step} onClick={this.handleHistoryClick} move={move}/>
      )
    );
    return (
     <Fragment>
      <div className={styles.topbar}>
        <img src={game} alt="new_page" onClick={this.handleScore} />
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
  logout: () => dispatch(actionCreatorsLogout.logout(dispatch)),
  score: () => dispatch(score(dispatch))
});

export default connect (mapStateToProps, mapDispatchToProps)(Game);
