import React from 'react';

import { actions } from './actions'

const initialState = { value: 'example@gmail.com'};

export function reducerLogin(state = initialState, action) {
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
                ...state, history: history.concat([{squares}]),
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
