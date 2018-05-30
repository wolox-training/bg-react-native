import React from 'react';

const initialState = { history: [{ squares: Array(9).fill(null) }], xIsNext: true, stepNumber: 0 };

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'ADD-SQUARES':
            return state = {...state,
                history: state.history.concat(action.squares),
                xIsNext: action.xIsNext,
                stepNumber: action.stepNumber
            };
        default:
            return state;
    }
}