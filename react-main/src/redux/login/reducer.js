import React from 'react';
import { actions } from './actions'

const initialState = { token: localStorage.getItem('token'), emailInvalid: false, passwordInvalid: false};

export function reducerLogin(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TOKEN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state, token: action.payload.token
      };
    case actions.GET_TOKEN_FAILURE:
      localStorage.clear();
      localStorage.setItem('token', '');
      return {
        ...state
      };
    default:
      return {...state};
   }
}
