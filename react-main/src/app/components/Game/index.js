import React, { Component } from 'react';
import Board from '../Board';
import Move from '../Move';
import { connect } from 'react-redux';
import { selectSquare, selectHistory, getWinner } from '../../../redux/game/actions';
import styles from './styles.scss';

class Game extends Component {

  handleSquareClick = i => (
    this.props.square(i)
  );

  handleHistoryClick = step => this.props.historySelected(step);

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
      <div className={styles.game}>
        <Board squares={this.props.history[this.props.current].squares} onClick={this.handleSquareClick} />
        <div className={styles.gameInfo}>
          <p className={styles.status}>{this.props.status}</p>
          <ol>{moves}</ol>
        </div>
      </div>
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
  winner: () => dispatch(getWinner())
});

export default connect (mapStateToProps, mapDispatchToProps)(Game);
