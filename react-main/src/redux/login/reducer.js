import React from 'react';
import { actions } from './actions'

const initialState = { token: localStorage.getItem('token'), emailInvalid: false, passwordInvalid: false, email: localStorage.getItem('email')};

export function reducerLogin(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TOKEN:
      //I do not do anything at the moment
      return {
        ...state, token: action.payload.token, email: action.payload.email
      };
    case actions.GET_TOKEN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('email', action.payload.email);
      return {
        ...state, token: action.payload.token, email: action.payload.email
      };
    case actions.GET_TOKEN_FAILURE:
      localStorage.clear();
      localStorage.setItem('token', '');
      localStorage.setItem('email', '');
      return {
        ...state
      };
    default:
      return {...state};
   }
}
