import Render from "./Render";
import {Board} from "./Types";

const board:Board = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 9
];

export default () => Render(board);


