const drawingBoard = document.querySelector('.drawing-board');


createGrids(16);

window.addEventListener("load", startup, false);

function startup(){
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

