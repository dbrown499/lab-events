const newDiv = document.getElementsByClassName("tic-tac-toe");
const squares = document.getElementsByClassName("empty");


function makeBoard(n) {
    for (let i = 0; i < 9; i++) {
        const newBoard = document.createElement('div');
        newBoard.setAttribute("class", "square empty");
        newDiv[0].appendChild(newBoard);
    }
    // return newDiv[0];
}

console.log(makeBoard());

function makeMove() {
    let activationCount = 0;

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", (e) => {
            if (squares[i].className.includes("empty") && activationCount % 2 === 0 && !squares[i].textContent) {
                activationCount++;
                squares[i].textContent = "X";
            } else if (squares[i].className.includes("empty") && activationCount % 2 === 1 && !squares[i].textContent) {
                activationCount++;
                squares[i].textContent = "O";
            }
        });
        // return newDiv[0];
    }
}

console.log(makeMove());

function reset(){
const reset = document.getElementsByTagName("button");

reset[0].addEventListener("click", (e)=> {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
});
}

console.log(reset());
