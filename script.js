const container = document.getElementById("container");
const changeGridSizeButton = document.querySelector('.changeGridSize');
const changeGridSizeInputEnter = document.getElementById('grid-size');
const clearGridButton = document.querySelector('.clearGrid');
let rowNum = 10;

makeRows(rowNum, rowNum);
// clear the grid function
function reset() {
    document
      .querySelectorAll(".grid-item")
      .forEach((e) => e.parentNode.removeChild(e));
}

// make the grid function
function makeRows(rows, cols) {
    reset();
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
    let gridItems = container.querySelectorAll('div');
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', corlorChange));
};

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i< 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function corlorChange(){
    this.style.opacity = 1;
    this.style.backgroundColor = getRandomColor();
}
//change grid-size function
function changeGridSize(){
    let rowNum = document.getElementById('grid-size').value; 
    Num = parseInt(rowNum);
    if (!Number.isInteger(Num)) return alert('USING NUMBERS ONLY') 
    else if ((Num <1) || (Num >125)) return alert('Please use numbers between 1 and 125');
    makeRows(rowNum, rowNum);
}

function clearGrid(){
    let gridItems = container.querySelectorAll('div');
    gridItems.forEach(gridItem => gridItem.style.backgroundColor = 'white');
    makeRows(20,20);
}


//
changeGridSizeButton.addEventListener('click', changeGridSize);
changeGridSizeInputEnter.addEventListener('keydown', function(e){
    if (e.code == 'Enter'){
        changeGridSize();
    }
})
clearGridButton.addEventListener('click', clearGrid);