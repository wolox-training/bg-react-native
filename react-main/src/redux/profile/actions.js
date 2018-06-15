import React from 'react';
import { push } from 'react-router-redux';

export const actions = {
  PROFILE: 'PROFILE'
};

export const profile = () => ({ type: actions.PROFILE });
