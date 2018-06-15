import React from 'react';
import loginService from "../../services/loginService";
import { push } from 'react-router-redux';

export const actions = {
  GET_TOKEN: 'GET_TOKEN',
  GET_TOKEN_SUCCESS: 'GET_TOKEN_SUCCESS',
  GET_TOKEN_FAILURE: 'GET_TOKEN_FAILURE',
};

const actionCreatorsLogin = {
  login: (credentials) => async dispatch => {
    dispatch({ type: actions.GET_TOKEN });
    const response = await loginService.login(credentials);
    if (response.ok) {
      dispatch ({
        type: actions.GET_TOKEN_SUCCESS,
        payload: response.data
      });
      dispatch(push('/game'));
    } else {
        if (response.data.emailInvalid) {
          alert("Invalid email")
        } else {
          if (response.data.passwordInvalid){
            alert("Invalid password")
          }
        }
      dispatch ({
        type: actions.GET_TOKEN_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionCreatorsLogin;
