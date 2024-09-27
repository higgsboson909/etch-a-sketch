


const container = document.querySelector(".container");


const rows = 16;
const columns = 16;

// for 16 by 16 square

for(let i = 0; i < rows; i++){
    
    for(let j = 0; j < columns; j++){
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        container.appendChild(gridItem);        
    }
}


// eventlistener 

// refer each element of grid
const gridItems = document.querySelectorAll(".grid-item");

// set event listener for each grid item
gridItems.forEach((item) => {
    
    // color the item when mouse enters
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "black";
    });

    // deColor the item when mouse go out of the element
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = "white";
    });

});
