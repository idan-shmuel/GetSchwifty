export function generateBoard(rowSize) {
    let board = [];
    let numbersToMix = [...Array(rowSize * rowSize).keys()];

    for (let i = 0; i < rowSize; i++) {
        let rowInArray = [];
        for(let j = 0; j < rowSize; j++) {
            let generatedIndex = Math.floor(Math.random() * numbersToMix.length);
            rowInArray[j] = numbersToMix[generatedIndex];
            numbersToMix.splice(generatedIndex,  1);
        }
        board.push(rowInArray);
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

export function isBoardSolvable(board, isEven=false) {
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

class GameSquare {
    constructor(value, x, y) {
        this.value = value;
        this.x = x;
        this.y = y;
    }
}

function isMoveLegal(position1, position2) {
    if (position1.value !== 0 && position2.value !== 0) {
        return false;
    }
    return Math.abs(position1.x - position2.x) === 1 || Math.abs(position1.y - position2.y) === 1;
}

export function isGameFinished(board) {
    let expectedArray = [...Array(board.length * board[0].length).keys()];
    let expectedArrayCheckIndex = 1;
    if (board[board.length-1][board[0].length-1] !== 0) {
        return false;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length ; j++) {
            if(expectedArray[expectedArrayCheckIndex] !== board[i][j] && expectedArrayCheckIndex < board.length * board[0].length) {
                return false;
            }
            expectedArrayCheckIndex++;
        }
    }

    return true;
}
