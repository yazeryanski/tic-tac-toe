import {winingPositions, config} from "./Configs";
import {Board, Point, WinCombo} from "./Types";
import AI from "./AI";
import Render from "./Render";

export function humanStep(board:Board):((event:Event) => void) {
    return function (event:Event):void {
        const target = event.target as HTMLElement;
        const id = target.dataset.id;

        board[id] = config.human;
        target.classList.add('used');

        setTimeout(() => {
            Render(board);
            checkWin(config.human, board);
            AI.step(board);
        }, 300);
    }
}

export function checkWin(player:Point, board:Board) {
    return winingPositions.find((combo: WinCombo) => {
        for (let i = 0; i < combo.length; i++) {
            const position:Point = board[ combo[i] ];
            if (position !== player) {
                return false;
            }
        }
        alert('YOU WIN')
        return true;
    });
}