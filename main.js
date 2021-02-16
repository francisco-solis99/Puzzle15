// console.log(Math.floor(Math.random() * (15 - 1) + 1));
let board;
let empty, empty_x, empty_y;
let elements;


function createBox() {

    let boardContainer = document.querySelector('.container')
    let box;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            box = document.createElement("div");
            box.id = "box" + (j + i * 4);
            box.className += "casilla";
            box.textContent = board[i][j];
            boardContainer.appendChild(box);
        }

    }

}

function createBoard() {
    board = new Array(4);
    for (let i = 0; i < 4; i++) {
        board[i] = new Array(4);
    }
    for (let i = 0; i < 4; i += 1) {
        for (let j = 0; j < 4; j += 1) {
            board[i][j] = (j + i * 4) + 1;
        }
    }
    board[3][3] = null;
    console.log(board);
    board = shuffleBoard(board);

}

function shuffleBoard(newBoard) {
    let aux;

    for (let counti = 3; counti > 0; counti -= 1) {
        for (let countj = 3; countj > 0; countj -= 1) {
            let randomIndex = Math.floor(Math.random() * countj);
            // Let's get the shuffle
            aux = newBoard[counti][countj];
            newBoard[counti][countj] = newBoard[randomIndex][randomIndex];
            newBoard[randomIndex][randomIndex] = aux;

        }
    }
    return newBoard;
}

function getEmpty() {
    elements = document.querySelectorAll('div.casilla');
    for (let i = 0; i < elements.length; i += 1) {
        if (elements[i].textContent === '') {
            empty = elements[i];
            break;
        }
    }
    empty.classList.add("emptyBox");
    empty_x, empty_y;
    console.log(board);
    for (let i = 0; i < 4; i += 1) {
        for (let j = 0; j < 4; j += 1) {
            if (board[i][j] === null) {
                empty_x = i;
                empty_y = j;
            }
        }
    }
    console.log(empty_x, empty_y);
    console.log(empty);
    // console.log(empty.previousElementSibling);
    // console.log(empty.nextElementSibling);
}


function possibleMovement() {
    document.addEventListener('keydown', left);
    document.addEventListener('keydown', right);
    document.addEventListener('keydown', up);
    document.addEventListener('keydown', down);


    function left(e) {
        if (e.keyCode == '37') {
            if (board[empty_x][empty_y + 1] !== undefined) {
                let boxMove = getElement(board[empty_x][empty_y + 1]);
                // let elementTemp;
                // elementTemp = empty;
                // empty = boxMove;
                // boxMove = elementTemp;
                empty.classList.remove("emptyBox");


                let temp = board[empty_x][empty_y + 1];
                board[empty_x][empty_y + 1] = board[empty_x][empty_y];
                board[empty_x][empty_y] = temp;
                upgradeBoard();
                getEmpty();

            } else
                alert('No se puede hacer el movimiento');
        }
    }

    function right(e) {
        if (e.keyCode == '39') {
            if (board[empty_x][empty_y - 1] !== undefined) {
                empty.classList.remove("emptyBox");
                let temp = board[empty_x][empty_y - 1];
                board[empty_x][empty_y - 1] = board[empty_x][empty_y];
                board[empty_x][empty_y] = temp;
                upgradeBoard();
                getEmpty();
            } else {
                alert('No se puede hacer el movimiento');
            }
        }
    }

    function up(e) {
        if (e.keyCode == '38') {
            if (board[empty_x + 1][empty_y]) {
                empty.classList.remove("emptyBox");
                let temp = board[empty_x + 1][empty_y];
                board[empty_x + 1][empty_y] = board[empty_x][empty_y];
                board[empty_x][empty_y] = temp;
                upgradeBoard();
                getEmpty();
            } else {
                alert('No se puede hacer el movimiento');
            }
        }
    }

    function down(e) {
        if (e.keyCode == '40') {
            if (board[empty_x - 1][empty_y] !== undefined) {
                empty.classList.remove("emptyBox");
                let temp = board[empty_x - 1][empty_y];
                board[empty_x - 1][empty_y] = board[empty_x][empty_y];
                board[empty_x][empty_y] = temp;
                upgradeBoard();
                getEmpty();
            } else {
                alert('No se puede hacer el movimiento');
            }
        }
    }
}

// function getElement(element) {
//     let boxtoMove;
//     for (let i = 0; i < elements.length; i += 1) {
//         if (elements[i].textContent === element.toString()) {
//             boxtoMove = elements[i];
//             break;
//         }
//     }
//     return boxtoMove;

// }


function upgradeBoard() {
    for (let i = 0; i < 4; i += 1) {
        for (let j = 0; j < 4; j += 1) {
            elements[j + i * 4].textContent = board[i][j];
        }
    }

    if (checkiffWin()) {
        alert('Felicidades, has resuelto el juego del 15');
        location.reload();
    }

}

function checkiffWin() {
    for (let i = 0; i < 4; i += 1) {
        for (let j = 0; j < 4; j += 1) {

            if (board[i][j] === ((j + i * 4) + 1)) {
                if (i === 3 && j === 2) {
                    return true;
                }
            } else
                return false;
        }
    }
}


function build() {
    createBoard();
    createBox();
    getEmpty();
    possibleMovement();
}