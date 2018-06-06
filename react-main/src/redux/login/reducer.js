import React from 'react';
import { actions } from './actions'

const initialState = { token: '', auth: false};

export function reducerLogin (state = initialState, action) {
  switch (action.type) {
    case actions.GET_TOKEN_SUCCESS:
      return {
        ...state, token: action.payload.token, auth: true
      };
    case actions.GET_TOKEN_FAILURE:
      return {
        ...state,
      };
    default:
        return state;
    }
}
