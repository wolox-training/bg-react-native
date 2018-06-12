import React from 'react';
import { actions } from './actions'

const initialState = { token: '' };

export function reducerLogout(state = initialState, action) {
  switch (action.type) {
    case actions.LOGOUT:
      localStorage.clear();
      localStorage.setItem('token', action.token);
      return {
        ...state, token: action.token
      };
    default:
      return {...state};
  }
}
