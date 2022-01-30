import {config} from "./Configs";
import {Board, Move} from "./Types";
import {getRandomNumber} from "./Utils";
import {checkWin, minimax} from "./Core.js";

export const step = (board:Board):void => {
    checkWin(config.computer, board);

    const move:Move = minimax(board, config.computer);
    board[move.index] = config.computer;
    console.log(move, 'MOVE');
}

export default {
    step
}