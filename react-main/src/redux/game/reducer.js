import React from 'react';

import calculateWinner from '../../app/components/Game/utils'
import { actions } from './actions'

const initialState = { history: [{ squares: Array(9).fill(null) }], xIsNext: true, stepNumber: 0,  };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SELECT:
      const history = state.history;
      const current = history[state.stepNumber];
      const squares = [...current.squares];
      if (calculateWinner(squares) || squares[action.payload]) {
          return;
      }
      squares[action.payload] = state.xIsNext ? "X" : "O";
      return {
          ...state, history: [...history, { squares }],
          squares: squares,
          stepNumber: state.stepNumber + 1,
          xIsNext: !state.xIsNext
      };
    case actions.HISTORY:
      return {...state, stepNumber: action.payload, xIsNext: (action.payload % 2) === 0};
    case actions.WINNER:
      const winner = calculateWinner(state.history[state.stepNumber].squares);
      let status = winner ? "Winner: " + winner : "Next player: " + (state.xIsNext ? "X" : "O");
      return {...state, status: status};
    default:
      return state;
  }
}
