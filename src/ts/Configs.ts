import {Board, Config, WinCombosList} from "./Types";

export const winingPositions:WinCombosList = [
    //Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Diagonal
    [0, 4, 8],
    [2, 4, 6]
]

export const entryBoard:Board = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
];

export const config:Config = {
    el: '#app',
    human: 'x',
    computer: 'o'
};