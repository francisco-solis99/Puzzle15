// console.log(Math.floor(Math.random() * (15 - 1) + 1));

function createBox() {

    let boardContainer = document.querySelector('.container')
    let box;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            box = document.createElement("div");
            box.id = "box" + (j + i * 4);
            box.className += "casilla";
            box.i = i;
            box.j = j;
            box.appendChild(document.createTextNode(""));
            boardContainer.appendChild(box);
        }

    }
    //i and j = 3;

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
    board[3][3] = 16;
    console.log(board)
}


function build() {
    createBox();
    createBoard();
}