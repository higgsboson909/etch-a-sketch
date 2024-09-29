// refer the container 
const container = document.querySelector(".container");
const sizer = document.querySelector(".sizer");

// no random color by default
let isRandom = false;

// default text for coloring grid boxes
let colorText = "background-Color: red;";

let columnItem;
let rowItem;

// refer all the color options
const redBorder = document.querySelector("#red");
const whiteBorder = document.querySelector("#white");
const greenBorder = document.querySelector("#green");
const blueBorder = document.querySelector("#blue");
const blackBorder = document.querySelector("#black");
const randomButton = document.querySelector(".random-color");



function resetBtnSize(){      // reset size of color btns
    redBorder.style.height = "30px";
    whiteBorder.style.height = "30px";
    greenBorder.style.height = "30px";
    blueBorder.style.height = "30px";
    blackBorder.style.height = "30px";
    randomButton.style.border = "0";

}
// default no. of squares per side
let s = 16;



// calculate color randomly
function getRandomColor(){
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 250);
    return `background-Color: rgb(${a}, ${b}, ${c});`;
}

// create grid & color the grid
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
    
    // listen for mouse activity
    columns.forEach((item) => {
        item.addEventListener('mouseover', () => {
            if(isRandom){       // for random coloring
                item.style.cssText = getRandomColor();
            }
            else{
                item.style.cssText = colorText;
   
            }
        });
    });
}    

// listen to "sizer" button
sizer.addEventListener('click', () => {
    do{
        s = prompt("Change the no. of squares per side: ");
        s = +s;
        if(isNaN(s) || s > 100 || s < 0){
            alert("Number must be b/w 1 and 100\nTry Again");
        }
    }while(isNaN(s) || s > 100 || s < 1);    

    container.innerHTML = "";      // remove existing grid before creating new one

    doColor(s);

});



// optional coloring of boxes
const color = document.querySelector(".colors");
color.addEventListener("click", function (event){
    isRandom = false;       // finish the random coloring
    let target = event.target;
    
    resetBtnSize();    // reset the color buttons' size


    switch(target.id){
        case "white":
            colorText = "background-Color: white;";
            whiteBorder.style.height = "40px";
            break;
        case "red":
            colorText = "background-Color: red;";
            redBorder.style.height = "40px";            
            break;
            
        case "green":
            greenBorder.style.height = "40px";
            colorText = "background-Color: green;"
            break;
        case "black":
            blackBorder.style.height = "40px";
            colorText = "background-Color: black;";
            break;
        case "blue":
            blueBorder.style.height = "40px";
            colorText = "background-Color: blue;";
            break;
    }
})


// only remove the coloring
const reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
    const eachBox = document.querySelectorAll(".column-item");
    eachBox.forEach((item) => {
        item.style.backgroundColor = "white";
    })
}); 

// random color button
randomButton.addEventListener('click', () => {
    resetBtnSize();    // RESET BUTTON SIZE
    randomButton.style.border = "white 3px solid";
    isRandom = true;

});

doColor(s);
