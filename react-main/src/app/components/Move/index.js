import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Move extends Component {
  handleClick = () => this.props.onClick(this.props.move);

  render() {
    const desc = this.props.move ? `Go to move #${this.props.move}` : 'Go to game start';
    return (
      <li key={this.props.move}>
        <button onClick={this.handleClick}>
          {desc}
        </button>
      </li>
    )
  }
}

Move.propTypes = {
  move: PropTypes.number,
  onClick: PropTypes.func
};

export default Move;
