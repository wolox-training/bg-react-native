import React from 'react';
import { actions } from './actions'

const initialState = { token: localStorage.getItem('token'), auth: !!localStorage.getItem('auth'), emailInvalid: false, passwordInvalid: false};

export function reducerLogin(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TOKEN_SUCCESS:
      localStorage.setItem('auth', action.payload.auth);
      localStorage.setItem('token', action.payload.token);
      return {
        ...state, token: action.payload.token, auth: true
      };
    case actions.GET_TOKEN_FAILURE:
      localStorage.setItem('auth', action.payload.auth);
      localStorage.setItem('token', '');
      return {
        ...state
      };
    default:
      return {...state};
   }
}
