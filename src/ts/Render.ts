import {Board} from "./Types";
import Config from "./config";

const getBoxesElements = (board:Board):HTMLElement[] => {
    return board.map((box, index) => {
        const element:HTMLElement = document.createElement('div');
        let boxValue = '';
        element.classList.add('box');
        element.dataset.id = index.toString();

        if (typeof box !== 'number') {
            boxValue = box;
            element.classList.add('used');
        } else {
            //If buttons already used there is no needed to add event
            element.addEventListener('click', (event) => {
                const target = event.target as HTMLElement;
                const id = target.dataset.id;

                board[id] = 'x';
                Render(board);
            });
        }

        element.innerHTML = `<span>${boxValue}</span>`;

        return element;
    })
};

const getGridElement = (board:Board):HTMLElement => {
    const boxes = getBoxesElements(board);
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.append(...boxes);

    return grid;
}

function Render(board:Board):void {
    const APP = document.querySelector(Config.el);
    const gridElement = getGridElement(board);

    APP.replaceChildren( gridElement );
}

export default Render;