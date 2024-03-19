let allColors = document.getElementsByClassName("color");
let currColor = document.getElementById("current-color");
let allCells = document.getElementsByClassName("cell");

// function colorPicked(input){
    for (let color of allColors) {
        color.addEventListener("click", () => {
            currColor["style"]["backgroundColor"] = color["style"]["backgroundColor"];
            // console.log(`the color ${color["style"]["backgroundColor"]} was picked!`)
        })
    }
// }

// function fillCellsWithColor(){
    for(let cell of allCells){
        cell.addEventListener("click", () => {
            cell["style"]["backgroundColor"] = currColor["style"]["backgroundColor"];
        })
    }
//  }
    
    
// console.log(colorPicked(allColors));
// console.log(allColors);