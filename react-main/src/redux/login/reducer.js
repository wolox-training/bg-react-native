import React from 'react';

import { actions } from './actions'

const initialState = { value: ''};

export function reducerLogin (state = initialState, action) {
  switch (action.type) {
    case actions.TOKEN:
      console.log(action.email)
      return {
        ...state
      };
      default:
        return state;
    }
}
