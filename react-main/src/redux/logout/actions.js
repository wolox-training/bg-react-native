import React from 'react';
import { push } from 'react-router-redux';
import {ROUTES} from '../../constants/routes';

export const actions = {
  LOGOUT: 'LOGOUT'
};

const actionCreatorsLogout = {
  logout: dispatch => (dispatch(push(ROUTES.LOGIN())), {type: actions.LOGOUT, token: ''})
};

export default actionCreatorsLogout;
