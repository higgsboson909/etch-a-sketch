// refer the container 
const container = document.querySelector(".container");
const sizer = document.querySelector(".sizer");

let colorText = "background-Color: red;";
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
        item.addEventListener('click', () => {
            item.style.cssText = colorText;
        });
    });
}    

// listen to "sizer" button
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

const redBorder = document.querySelector("#red");
const whiteBorder = document.querySelector("#white");
const greenBorder = document.querySelector("#green");
const blueBorder = document.querySelector("#blue");
const blackBorder = document.querySelector("#black");


const color = document.querySelector(".colors");
color.addEventListener("click", function (event){
    let target = event.target;
    
    redBorder.style.height = "30px";
    whiteBorder.style.height = "30px";
    greenBorder.style.height = "30px";
    blueBorder.style.height = "30px";
    blackBorder.style.height = "30px";

    switch(target.id){
        case "white":
            colorText = "background-Color: white;";
            whiteBorder.style.height = "39px";
            break;
        case "red":
            colorText = "background-Color: red;";
            redBorder.style.height = "39px";            
            break;
            
        case "green":
            greenBorder.style.height = "39px";
            colorText = "background-Color: green;"
            break;
        case "black":
            blackBorder.style.height = "39px";
            colorText = "background-Color: black;";
            break;
        case "blue":
            blueBorder.style.height = "39px";
            colorText = "background-Color: blue;"
            break;
    }
})

const reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
    const eachBox = document.querySelectorAll(".column-item");
    eachBox.forEach((item) => {
        item.style.backgroundColor = "white";
    })
}); 