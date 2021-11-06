import './scss/main.scss';

const App = document.getElementById('app');

const getBoxesElements = (board:number[]):HTMLElement[] => {
    return board.map(box => {
        const element:HTMLElement = document.createElement('div');
        element.classList.add('box');
        element.addEventListener('click', () => alert('box'));
        return element;
    })
};

const board:number[] = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
];

const boxes = getBoxesElements(board);
const grid = document.createElement('div');
grid.classList.add('grid');
grid.append(...boxes);

App.append(grid);


