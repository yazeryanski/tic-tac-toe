import Config from "./Config";
import {Board} from "./Types";
import {getRandomNumber} from "./Utils";

export const step = (board:Board):void => {
    const randomIndex = getRandomNumber(0, board.length - 1);
    board[randomIndex] = Config.computer;
}

export default {
    step
}