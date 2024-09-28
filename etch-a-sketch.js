// refer the container element
const container = document.querySelector(".container");

// default sizes 
let squares = 16;
const gridSize = 550;

let gridItem;

// create grid of size 16
displayGrid(squares);

// pixel size
function displayGrid(sq){
    let pSize = (gridSize / sq) + "px";

    for(let i = 0; i < sq; i++){

        for(let j = 0; j < sq; j++){
            gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            container.appendChild(gridItem);
        }
    }

    // eventlistener 

    // refer each element of grid
    const gridItems = document.querySelectorAll(".grid-item");

    // set event listener for each grid item
    gridItems.forEach((item) => {
        item.style.width = pSize;
        item.style.height = pSize;
        // color the item when mouse enters
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "black";
        });

        // deColor the item when mouse go out of the element
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = "white";
        });

    });

}


// button ask for squares per side 
const sizeButton = document.querySelector("button");

sizeButton.addEventListener('click', () => {
    do{
            squares = prompt("Change the number of squares per side (max: 100): ");
            squares = +squares;
            if((isNaN(squares) || squares < 1 || squares > 100)){
                alert("Number must be between 1 & 100\nTry agian");
            }

    }while(isNaN(squares) || squares < 1 || squares > 100);
    
    if(gridItem){
        const allItems = document.querySelectorAll(".grid-item");
        allItems.forEach((item) => {
            container.removeChild(item);
        })
    }
    displayGrid(squares);

});

