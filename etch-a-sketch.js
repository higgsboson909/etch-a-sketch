// refer the container 
const container = document.querySelector(".container");

// default size of grid to 16
let size = 30;

for(let i = 0; i < size; i++){
    
    // create i no. of rows inside the container
    const rowItem = document.createElement("div");
    rowItem.classList.add("row-item");

    // append these rows in the container
    container.appendChild(rowItem);


    // create j no. of columns for each row
    for(let j = 0; j < size; j++){
        const columnItem = document.createElement("div");
        columnItem.classList.add("column-item");
    
        // append the columns inside each i row
        rowItem.appendChild(columnItem);
    }
}