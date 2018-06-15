import React from 'react';

export const actions = {
  LOGOUT: 'LOGOUT'
};

const actionCreatorsLogout = {
  logout: () => ({ type: actions.LOGOUT, token: '' })
};

export default actionCreatorsLogout;
