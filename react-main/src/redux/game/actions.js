import React from 'react';

export const selectSquare = position => {
    return {
        type: "SELECT", payload: position
    };
};

export const selectHistory = step => {
    return {
        type: "HISTORY", payload: step
    };
};

export const getWinner = () => {
    return {
        type: "WINNER"
    };
};