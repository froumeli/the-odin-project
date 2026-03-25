// Build a Etch-a-Sketch web app with a 16x16 grid
// User can draw by hovering over the grid cells with the mouse
// Also, user can change the grid number using a button

// Select the container element where the grid will be created
let container = document.querySelector('.container');

// Function to create the grid
function createGrid(size) {
    // Clear the container before creating a new grid
    container.innerHTML = '';

    // Calculate the size of the squares
    const percentage = 100 / size;

    // Add the new containers
    for(let i = 0; i < size*size; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.flexBasis = `${percentage}%`;
        div.style.height = `${percentage}%`;

        div.addEventListener("mouseover", () => {
            div.classList.add("active");
        });

        container.appendChild(div);
    }
}

createGrid(32);