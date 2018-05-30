import React from 'react';
const actionTypes = ["ADD-SQUARES"];

export function addSquare(history) {
    return {
        type: actionTypes[1],
        history: history
        //xIsNext: game.xIsNext,
        //stepNumber: game.stepNumber
    };
}