import {config} from "./Configs";
import {Board} from "./Types";
import {getRandomNumber} from "./Utils";

export const step = (board:Board):void => {
    const randomIndex = getRandomNumber(0, board.length - 1);
    board[randomIndex] = config.computer;
}

export default {
    step
}