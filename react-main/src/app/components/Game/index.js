import React, { Component, Fragment } from 'react';
import Board from '../Board';
import Move from '../Move';
import TopbarGame from '../TopbarGame';
import { connect } from 'react-redux';
import { selectSquare, selectHistory, getWinner } from '../../../redux/game/actions';
import styles from './styles.scss';
import actionCreatorsLogout from '../../../redux/logout/actions';
import { profile } from '../../../redux/profile/actions';

class Game extends Component {
  handleSquareClick = i => (this.props.square(i));

  handleHistoryClick = step => this.props.historySelected(step);

  handleLogout = () => (this.props.logout());

  handleProfile = () => (this.props.profile());

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
       <TopbarGame handleProfile={this.handleProfile} handleLogout={this.handleLogout}/>
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
  profile: () => dispatch(profile(dispatch))
});

export default connect (mapStateToProps, mapDispatchToProps)(Game);
