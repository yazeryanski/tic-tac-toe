import {winingPositions, config} from "./Configs";
import {Board, Move, Moves, Point, WinCombo} from "./Types";
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
            checkGameOver(config.human, board);
            AI.step(board);
            Render(board);
            checkGameOver(config.computer, board);
        }, 300);
    }
}

export function checkWin(player:Point, board:Board):boolean {
    return !!winingPositions.find((combo: WinCombo) => {
        for (let i = 0; i < combo.length; i++) {
            const position:Point = board[ combo[i] ];
            if (position !== player) {
                return false;
            }
        }
        return true;
    });
}

export function availableSteps(board: Board):Board {
    return board.filter( step => step !== config.human && step !== config.computer)
}

export function minimax(board: Board, player:Point):Move {
    // console.log(board, 'MINIMAX')
    const availBoard:Board = availableSteps(board);

    if ( checkWin(config.human, board) )
        return { score: -10 }
    else if ( checkWin( config.computer, board ) )
        return { score: 10 }
    else if ( availBoard.length === 0 )
        return { score: 0 }

    // Checking available moves
    let moves: Moves = [];

    for (let i = 0; i < availBoard.length; i++) {
        let move = { index: 0, score: 0 }
        move.index = board[ availBoard[i] ];
        board[availBoard[i]] = player;

        if (player === config.computer)
            move.score = minimax(board, config.human).score;
        else
            move.score = minimax(board, config.computer).score;

        board[ availBoard[i] ] = move.index;
        moves.push(move);
    }

    //Best Move Calculating
    let bestMove;
    if (player === config.computer) {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i
            }
        }
    } else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i
            }
        }
    }

    return moves[bestMove]
}

export function checkGameOver(player:Point, board:Board) {
    let message: string;
    let gameOver = false;

    if (checkWin(player, board)) {
        gameOver = true;
        message = 'Computer has won!'
        if ( player === config.human )
            message = 'That is not posible... But you won!';
    } else if (availableSteps(board).length === 0) {
        gameOver = true;
        message = 'Draw!';
    }

    if (gameOver) {
        alert (message);
    }
}