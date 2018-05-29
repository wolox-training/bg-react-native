import React, { Component } from 'react';
import {connect} from 'react-redux';

import Board from '../Board';

import styles from './styles.scss';
import calculateWinner from './utils.js';

class Game extends Component {
  state = { history: [{ squares: Array(9).fill(null) }], xIsNext: true, stepNumber: 0 };

  jumpTo = move => this.setState({ stepNumber: move, xIsNext: move % 2 === 0 });

  handleClick = i => {
    const history = this.state.history;
    const squares = history[this.state.stepNumber].squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: this.state.stepNumber + 1
    });
  };

  render() {
    const history = this.state.history;
    const squares = history[this.state.stepNumber].squares;
    const winner = calculateWinner(squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    const status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    return (
      <div className={styles.game}>
        <div className={styles.gameInfo}>
          <Board squares={squares} onClick={this.handleClick} />
        </div>
        <div className={styles.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
      scuare: state.squares,
      xIsNext: state.xIsNext,
      stepNumber: state.stepNumber
});

export default connect(mapStateToProps)(Game);
