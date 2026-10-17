const container = document.querySelector('.container');
const newGridButton = document.querySelector('#new-grid');
const clearGridButton = document.querySelector('#clear-grid');
const defaultGridSize = 32;
let isDrawing = false;

function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
}

container.addEventListener('mousedown', (event) => {
    event.preventDefault();

    const square = event.target.closest('.square');
    if (!square) {
        return;
    }

    isDrawing = true;
    square.classList.add('active');
});

container.addEventListener('dragstart', (event) => {
    event.preventDefault();
});

container.addEventListener('mouseover', (event) => {
    if (!isDrawing) {
        return;
    }

    const square = event.target.closest('.square');
    if (square) {
        square.classList.add('active');
    }
});

document.addEventListener('mouseup', () => {
    isDrawing = false;
});

function requestGridSize() {
    const input = prompt('How many squares should each side of the new grid have?');
    if (input === null) {
        return;
    }

    const size = Number(input);
    if (!Number.isInteger(size) || size < 1 || size > 100) {
        alert('Please enter a whole number between 1 and 100.');
        return;
    }

    createGrid(size);
}

function clearGrid() {
    container.querySelectorAll('.active').forEach((square) => {
        square.classList.remove('active');
    });
}

newGridButton.addEventListener('click', requestGridSize);
clearGridButton.addEventListener('click', clearGrid);

createGrid(defaultGridSize);
