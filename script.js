// I will need to create a factory function for the players. This function will need
// to check if the space is taken and also check for victory.

const cellOne = document.getElementById('1');
const cellTwo = document.getElementById('2');
const cellThree = document.getElementById('3');
const cellFour = document.getElementById('4');
const cellFive = document.getElementById('5');
const cellSix = document.getElementById('6');
const cellSeven = document.getElementById('7');
const cellEight = document.getElementById('8');
const cellNine = document.getElementById('9');

let playerTurn = 1;


const spaces = document.querySelectorAll('.cell');
for (let i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener('click', () => {
        checkIfTaken();
    })
}

function checkIfTaken() {
    let taken = false;
    if (event.target.innerHTML != '') {
        alert('That square is taken!');
        taken = true;
    }

    if (taken === false) {
        placeSymbolX();
        placeSymbolO();
        changeTurn();
        checkVictory();
        checkDraw();
    };
}


function placeSymbolX() {
    if (playerTurn != 1) return;
    event.target.innerHTML = 'X';
}

function placeSymbolO() {
    if (playerTurn != 2) return;
    event.target.innerHTML = 'O';
}

function changeTurn() {
    if (playerTurn === 1) return playerTurn = 2;
    if (playerTurn === 2) return playerTurn = 1;
}


function clearBoard() {
    cellOne.innerHTML = null;
    cellTwo.innerHTML = null;
    cellThree.innerHTML = null;
    cellFour.innerHTML = null;
    cellFive.innerHTML = null;
    cellSix.innerHTML = null;
    cellSeven.innerHTML = null;
    cellEight.innerHTML = null;
    cellNine.innerHTML = null;
}

function victoryX() {
    alert('Player X wins!');
    clearBoard();
    playerTurn = 1;
}

function victoryO() {
    alert('Player O wins!');
    clearBoard();
    playerTurn = 1;
}

function checkVictory() {
    if (cellOne.innerHTML === 'X' && cellTwo.innerHTML === 'X' && cellThree.innerHTML === 'X') {
        victoryX();
    };
    if (cellOne.innerHTML === 'X' && cellFive.innerHTML === 'X' && cellNine.innerHTML === 'X') {
        victoryX();
    };
    if (cellOne.innerHTML === 'X' && cellFour.innerHTML === 'X' && cellSeven.innerHTML === 'X') {
        victoryX();
    };
    if (cellTwo.innerHTML ==='X' && cellFive.innerHTML === 'X' && cellEight.innerHTML === 'X') {
        victoryX();
    };
    if (cellThree.innerHTML === 'X' && cellSix.innerHTML === 'X' && cellNine.innerHTML === 'X') {
        victoryX();
    };
    if (cellThree.innerHTML === 'X' && cellFive.innerHTML === 'X' && cellSeven.innerHTML === 'X') {
        victoryX();
    };
    if (cellFour.innerHTML === 'X' && cellFive.innerHTML === 'X' && cellSix.innerHTML === 'X') {
        victoryX();
    };
    if (cellSeven.innerHTML === 'X' && cellEight.innerHTML === 'X' && cellNine.innerHTML === 'X') {
        victoryX();
    };

    if (cellOne.innerHTML === 'O' && cellTwo.innerHTML === 'O' && cellThree.innerHTML === 'O') {
        victoryO();
    };
    if (cellOne.innerHTML === 'O' && cellFive.innerHTML === 'O' && cellNine.innerHTML === 'O') {
        victoryO();
    };
    if (cellOne.innerHTML === 'O' && cellFour.innerHTML === 'O' && cellSeven.innerHTML === 'O') {
        victoryO();
    };
    if (cellTwo.innerHTML ==='O' && cellFive.innerHTML === 'O' && cellEight.innerHTML === 'O') {
        victoryO();
    };
    if (cellThree.innerHTML === 'O' && cellSix.innerHTML === 'O' && cellNine.innerHTML === 'O') {
        victoryO();
    };
    if (cellThree.innerHTML === 'O' && cellFive.innerHTML === 'O' && cellSeven.innerHTML === 'O') {
        victoryO();
    };
    if (cellFour.innerHTML === 'O' && cellFive.innerHTML === 'O' && cellSix.innerHTML === 'O') {
        victoryO();
    };
    if (cellSeven.innerHTML === 'O' && cellEight.innerHTML === 'O' && cellNine.innerHTML === 'O') {
        victoryO();
    };
};


function checkDraw() {
    if (cellOne.innerHTML != '' && cellTwo.innerHTML != '' && cellThree.innerHTML != '' && cellFour.innerHTML != '' && cellFive.innerHTML != '' && cellSix.innerHTML != '' && cellSeven.innerHTML != '' && cellEight.innerHTML != '' && cellNine.innerHTML != '') {
        alert('It\'s a tie!')
        clearBoard();
    }
}








// const Player = (name, symbol) => {
//     const getName = () => name;
//     const getSymbol = () => symbol;
    

//     const clearBoard = () => {
//         cellOne.innerHTML = null;
//         cellTwo.innerHTML = null;
//         cellThree.innerHTML = null;
//         cellFour.innerHTML = null;
//         cellFive.innerHTML = null;
//         cellSix.innerHTML = null;
//         cellSeven.innerHTML = null;
//         cellEight.innerHTML = null;
//         cellNine.innerHTML = null;
//     }

//     const victoryX = () => {
//         alert('Player X wins!');
//         clearBoard();
//     }

//     const victoryO = () => {
//         alert('Player O wins!');
//         clearBoard();
//     }

//     const checkVictory = () => {
//         if (cellOne.innerHTML === 'X' && cellTwo.innerHTML === 'X' && cellThree.innerHTML === 'X') {
//             victoryX();
//         };
//         if (cellOne.innerHTML === 'X' && cellFive.innerHTML === 'X' && cellNine.innerHTML === 'X') {
//             victoryX();
//         };
//         if (cellOne.innerHTML === 'X' && cellFour.innerHTML === 'X' && cellSeven.innerHTML === 'X') {
//             victoryX();
//         };
//         if (cellTwo.innerHTML ==='X' && cellFive.innerHTML === 'X' && cellEight.innerHTML === 'X') {
//             victoryX();
//         };
//         if (cellThree.innerHTML === 'X' && cellSix.innerHTML === 'X' && cellNine.innerHTML === 'X') {
//             victoryX();
//         };
//         if (cellThree.innerHTML === 'X' && cellFive.innerHTML === 'X' && cellSeven.innerHTML === 'X') {
//             victoryX();
//         };
//         if (cellFour.innerHTML === 'X' && cellFive.innerHTML === 'X' && cellSix.innerHTML === 'X') {
//             victoryX();
//         };
//         if (cellSeven.innerHTML === 'X' && cellEight.innerHTML === 'X' && cellNine.innerHTML === 'X') {
//             victoryX();
//         };

//         if (cellOne.innerHTML === 'O' && cellTwo.innerHTML === 'O' && cellThree.innerHTML === 'O') {
//             victoryO();
//         };
//         if (cellOne.innerHTML === 'O' && cellFive.innerHTML === 'O' && cellNine.innerHTML === 'O') {
//             victoryO();
//         };
//         if (cellOne.innerHTML === 'O' && cellFour.innerHTML === 'O' && cellSeven.innerHTML === 'O') {
//             victoryO();
//         };
//         if (cellTwo.innerHTML ==='O' && cellFive.innerHTML === 'O' && cellEight.innerHTML === 'O') {
//             victoryO();
//         };
//         if (cellThree.innerHTML === 'O' && cellSix.innerHTML === 'O' && cellNine.innerHTML === 'O') {
//             victoryO();
//         };
//         if (cellThree.innerHTML === 'O' && cellFive.innerHTML === 'O' && cellSeven.innerHTML === 'O') {
//             victoryO();
//         };
//         if (cellFour.innerHTML === 'O' && cellFive.innerHTML === 'O' && cellSix.innerHTML === 'O') {
//             victoryO();
//         };
//         if (cellSeven.innerHTML === 'O' && cellEight.innerHTML === 'O' && cellNine.innerHTML === 'O') {
//             victoryO();
//         };
//     };
//     return {checkIfTaken, checkVictory};
// };

// const playerX = Player('One', 'X');
// const playerO = Player('Two', 'O');