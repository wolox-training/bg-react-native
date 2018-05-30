import React, { Component } from 'react';

import Board from '../Board';

import { connect } from 'react-redux';
import { addSquare } from '../../../redux/draw/actions';

import reducer from '../../../redux/draw/reducer';
import styles from './styles.scss';
import calculateWinner from './utils.js';

class Game extends Component {
  jumpTo = move => this.setState({ stepNumber: move, xIsNext: move % 2 === 0 });

  handleClick = i => {

    const history = this.props.history;
    const squares = history[this.props.stepNumber].squares.slice();
    if (calculateWinner(squares) || squares[i]) {
        return;
    }

    squares[i] = this.props.xIsNext ? 'X' : 'O';

    const game = {
        history: history.concat([{ squares }]),
        xIsNext: !this.props.xIsNext,
        stepNumber: this.props.stepNumber + 1
    }

    /*this.setState({
      history: history.concat([{ squares }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: this.state.stepNumber + 1
    });*/

  };

  render() {
      debugger;
    const history = this.props.history;
    const squares = history[this.props.stepNumber].squares;
    const winner = calculateWinner(squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    const status = winner ? `Winner: ${winner}` : `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
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

const mapStateToProps = (reducer) => {
    return{
      history: reducer.history,
      xIsNext: reducer.xIsNext,
      stepNumber: reducer.stepNumber
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        game: (game) => dispatch(addSquare(game))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Game);