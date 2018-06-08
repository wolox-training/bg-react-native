import React from 'react';
import { push } from 'react-router-redux';

export const actions = {
  LOGOUT: 'LOGOUT'
};

const actionCreatorsLogout = {
  logout: dispatch => (dispatch(push('/')), {type: actions.LOGOUT, token: ''})
};

export default actionCreatorsLogout;
