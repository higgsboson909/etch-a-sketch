// refer the container 
const container = document.querySelector(".container");
const sizer = document.querySelector(".sizer");

let rowItem;
// default no. of squares per side
let s = 16;
let columnItem;
// default size of grid to 16
doColor(s);
function doColor(size){
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
}    


sizer.addEventListener('click', () => {



    do{
        s = prompt("Change the no. of squares per side: ");
        s = +s;
        if(isNaN(s) || s > 100 || s < 0){
            alert("Number must be b/w 1 and 100\nTry Agian");
        }
    }while(isNaN(s) || s > 100 || s < 1);    


        // refer all the classes inside the container
        const allItems = document.querySelectorAll(".row-item");
        allItems.forEach((item) => {
            container.removeChild(item);
        });

    doColor(s);

    
});
