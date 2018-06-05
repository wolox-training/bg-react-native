import React from 'react';

export const actions = {
    TOKEN: 'TOKEN'
}

export const getToken = (email, pass) => ({ type: actions.TOKEN, email: email, pass: pass});
