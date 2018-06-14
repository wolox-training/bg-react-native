import React from 'react';
import { actions } from './actions';

const initialState = { token: localStorage.getItem('token'), emailInvalid: false, passwordInvalid: false, email: localStorage.getItem('email') };

export function reducerGoBack(state = initialState, action) {
  switch (action.type) {
    case actions.GO_BACK:
      return {
        ...state
      };
    default:
      return state;
  }
}
