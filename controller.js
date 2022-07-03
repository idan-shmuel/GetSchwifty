function generateBoard(rowSize) {
    let board = [];
    let numbersToMix = [...Array(rowSize * rowSize).keys()];

    for (let i = 0; i < rowSize**2; i++) {
        let generatedIndex = Math.floor(Math.random() * numbersToMix.length);
        board[i] = numbersToMix[generatedIndex];
        numbersToMix.splice(generatedIndex,  1);
    }
    return board;
}

function getGreaterNumbersCountInArray(board, i, j) {
    let countGreaterNumbers = 0;
    let continueCheckAfterNumber = j+1;
    for (let k = i; k < board.length; k++) {
        for (let l = continueCheckAfterNumber; l < board[0].length; l++) {
            if (board[i][j] > board[k][l] && board[k][l] !== 0) {
                countGreaterNumbers++;
            }
        }
        continueCheckAfterNumber = 0;
    }
    return countGreaterNumbers;
}

function isBoardSolvable(board, isEven=false) {
    let countGreaterNumbers = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] !== 0){
                countGreaterNumbers += getGreaterNumbersCountInArray(board, i, j);
            }
            else if (isEven) {
                countGreaterNumbers += i+1;
            }
        }
    }
    return countGreaterNumbers%2 === 0;
}