import React from 'react';

export const actions = {
  SELECT: 'SELECT',
  HISTORY: 'HISTORY',
  WINNER: 'WINNER'
}

export const selectSquare = position => ({ type: actions.SELECT, payload: position});

export const selectHistory = step => ({ type: actions.HISTORY, payload: step });

export const getWinner = () => ({ type: actions.WINNER });
