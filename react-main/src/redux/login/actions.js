import React from 'react';
import loginService from "../../services/loginService";

export const actions = {
  GET_TOKEN_SUCCESS: 'GET_TOKEN_SUCCESS',
  GET_TOKEN_FAILURE: 'GET_TOKEN_FAILURE',
  ASD: 'ASD'
};

const actionCreators = {
  login: (credentials) => async dispatch => {
  //dispatch({ type: actions.GET_BOOKS }); PREGUNTAR
  const response = await loginService.login(credentials);
  if (response.ok) {
    dispatch ({
      type: actions.GET_TOKEN_SUCCESS,
      payload: response.data //esto trae un token de la api
    });
  } else {
    alert("Invalid password");
      dispatch ({
        type: actions.GET_TOKEN_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionCreators
