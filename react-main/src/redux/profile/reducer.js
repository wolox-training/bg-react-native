import React from 'react';
import { actions } from './actions';

const initialState = { info: '' };

export function reducerScore(state = initialState, action) {
  switch (action.type) {
    case actions.PROFILE:
      return {
        ...state
      };
    default:
      return state;
  }
}
