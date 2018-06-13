import React from 'react';
import { goBack } from 'react-router-redux';

export const actions = {
  GO_BACK: 'GO_BACK'
};

export const back = dispatch => (dispatch(goBack()), {type: actions.GO_BACK});
