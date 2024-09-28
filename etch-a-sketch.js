// refer the container 
const container = document.querySelector(".container");
const button = document.querySelector("button");

let rowItem;
let size = 15;
let columnItem;
// default size of grid to 16
    for(let i = 0; i < size; i++){
    
        // create i no. of rows inside the container
        rowItem = document.createElement("div");
        rowItem.classList.add("row-item");
    
        // append these rows in the container
        container.appendChild(rowItem);
    
    
        // create j no. of columns for each row
        for(let j = 0; j < size; j++){
            columnItem = document.createElement("div");
            columnItem.classList.add("column-item");
        
            // append the columns inside each i row
            rowItem.appendChild(columnItem);
        }
    }
    
    // select all boxes
    const columns = document.querySelectorAll(".column-item")
    
    columns.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.style.cssText = "background-Color: red;";
        });
    });

button.addEventListener('click', () => {



    do{
        s = prompt("Change the no. of squares per side: ");
        s = +s;
        if(isNaN(s) || s > 100 || s < 0){
            alert("Number must be b/w 1 and 100\nTry Agian");
        }
    }while(isNaN(s) || s > 100 || s < 1);    



    
});
