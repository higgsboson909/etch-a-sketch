

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

