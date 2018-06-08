import React from 'react';
import { push } from 'react-router-redux';

export const actions = {
  SCORE: 'SCORE'
};

export const score = (dispatch) => (dispatch(push('/score')), {type: actions.SCORE});
