import React from 'react';
import { push } from 'react-router-redux';
import { ROUTES } from '../../constants/routes';

export const actions = {
  PROFILE: 'PROFILE'
};

export const profile = (dispatch) => (dispatch(push(ROUTES.PROFILE())), {type: actions.PROFILE});
