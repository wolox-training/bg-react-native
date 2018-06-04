import React, { Component } from 'react';

import Board from '../Board';

import { connect } from 'react-redux';
import { selectSquare, selectHistory, getWinner } from '../../../redux/game/actions';

import styles from './styles.scss';

class Game extends Component {

  handleSquareClick = i => (
    this.props.square(i)
  );

  handleHistoryClick = step => {
    return this.props.historySelected(step);
  };

  componentDidMount() {
    this.props.winner()
  };

  componentDidUpdate() {
    this.props.winner()
  };

  render() {
    const moves = this.props.history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
        return (
        <li key={move}>
          <button onClick={() => this.handleHistoryClick(move)}>{desc}</button>
        </li>
      );
    });
    return (
      <div className={styles.game}>
        <div className={styles.gameInfo}>
          <Board squares={this.props.history[this.props.current].squares} onClick={this.handleSquareClick} />
        </div>
        <div className={styles.gameInfo}>
          <div>{this.props.status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.history,
    isNext: state.xIsNext,
    current: state.stepNumber,
    status: state.status
  }
};

const mapDispatchToProps = dispatch => {
  return {
    square: i => dispatch(selectSquare(i)),
    historySelected: step => dispatch(selectHistory(step)),
    winner: () => dispatch(getWinner())
  };
};

export default connect (mapStateToProps,mapDispatchToProps)(Game);
