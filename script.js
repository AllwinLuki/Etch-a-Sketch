const drawingBoard = document.querySelector('.drawing-board');
const resetButton = document.querySelector('.reset');
const rainbowButton = document.querySelector('.rainbow');
const fadeButton = document.querySelector('.fade');

fadeButton.addEventListener('click', () => {
    let pickColor = document.querySelector('.pick-color');
    let selectedColor = pickColor.value;
    grids = document.querySelectorAll('.grid'); 
    grids.forEach((grid) => {
        selectedColor.setAttribute('style', 'filter: brightness(90%)')
            grid.addEventListener('mouseenter', () => {
            grid.setAttribute('style', `background: ${selectedColor}`);
            })
        });
})

rainbowButton.addEventListener('click', () => {
    let grids = document.querySelectorAll('.grid'); 
    grids.forEach((grid) => {
        grid.replaceWith(grid.cloneNode(true));
        })
    
    grids = document.querySelectorAll('.grid'); 
    grids.forEach((grid) => {
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            grid.addEventListener('mouseenter', () => {
            grid.setAttribute('style', `background: ${randomColor}`);
            })
        });
    });

resetButton.addEventListener('click', () => {
    let pickedColor = document.querySelector(".pick-color");
    pickedColor.value = "#000000";
   deleteGrids();
    let gridNumber = Number(prompt("Please enter grid size (upto 100 pixel)!", "16"));
    if(gridNumber > 100){
        gridNumber = Number(prompt("Grid size should be under 100px big!", "16"));  
    }
    createGrids(gridNumber);
    let grids = document.querySelectorAll('.grid'); 
    grids.forEach((grid) => {
        grid.addEventListener('mouseenter', () => {
        grid.setAttribute('style', 'background: black');
        })
    });
})

window.addEventListener("load", startup, false);

function startup(){
    createGrids(16);
    let pickColor = document.querySelector('.pick-color');
    let selectedColor = pickColor.value;
    let grids = document.querySelectorAll('.grid');
    
    grids.forEach((grid) => {
        grid.addEventListener('mouseenter', () => {
        grid.setAttribute('style', 'background: black');
        })
    });
    pickColor.addEventListener("change", updateColor, false);
    }

function updateColor(event){
    let grids = document.querySelectorAll('.grid');
    
    grids.forEach((grid) => {
        grid.addEventListener('mouseenter', () => {
        grid.setAttribute('style', `background: ${event.target.value}`);
        })
    });
    
}

function createGrids(number){
for(i = 0; i < number; i++){
    const row = document.createElement('div');
    row.classList.add('row');
    for(j = 0; j < number; j++){
    const column = document.createElement('div');
    column.classList.add('grid');
    row.appendChild(column);
    drawingBoard.appendChild(row);
    }
}
}

function deleteGrids(){
        drawingBoard.innerHTML = "";
}



