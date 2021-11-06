import Render from "./Render";
import {Board} from "./Types";

const board:Board = [
    0, 1, 2,
    3, 4, 'x',
    6, 7, 'o'
];

export default () => Render(board);


