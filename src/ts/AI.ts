import {config} from "./Configs";
import {Board} from "./Types";
import {getRandomNumber} from "./Utils";
import {checkWin} from "./Core.js";

export const step = (board:Board):void => {
    const randomIndex = getRandomNumber(0, board.length - 1);
    board[randomIndex] = config.computer;
    checkWin(config.computer, board);
}

export default {
    step
}