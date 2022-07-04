import { isGameFinished } from "./controller.js";

export function drawBoard(board) {
    let boardTable = document.createElement('boardTable');
    let boardTableBody = document.createElement('boardTableBody');

    board.forEach(function(rowData) {
        let row = document.createElement('tr');

        rowData.forEach(function(cellData) {
            let cell = document.createElement('td');
            cell.setAttribute("id", cellData);
            cell.onclick = switchPlace;
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        boardTableBody.appendChild(row);
    });

    boardTable.appendChild(boardTableBody);
    document.body.appendChild(boardTable);

    function switchPlace(event) {
        let positionToSwipe = getPressedButton(event, board);
        let indexY = positionToSwipe[0];
        let indexX = positionToSwipe[1];

        let emptyCellIndex = getIndexOfEmptyCell(board, indexY, indexX);
        if (emptyCellIndex !== []) {
            swipeBetweenTwoElements(board, indexY, indexX, emptyCellIndex);
            if (isGameFinished(board)) {
                console.log("win");
            }
        }
    }
}

function getPressedButton(event, board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == event.target.innerHTML) {
                return [i,j];
            }
        }
    }
}

function getIndexOfEmptyCell(board, indexY, indexX) {
    if (board[indexY][indexX+1] === 0) {
        return [indexY, indexX+1];
    }
    if (indexY+1 < board.length && board[indexY+1][indexX] === 0) {
        return [indexY+1, indexX];
    }
    if (board[indexY][indexX-1] === 0) {
        return [indexY, indexX-1];
    }
    if (indexY-1 >= 0 && board[indexY-1][indexX] === 0) {
        return [indexY-1, indexX];
    }
    return [];
}

function swipeBetweenTwoElements(board, indexY, indexX, emptyCellIndex) {
    let tmpID = board[emptyCellIndex[0]][emptyCellIndex[1]];
    let elementToSwap = document.getElementById(board[indexY][indexX])
    let elementZero = document.getElementById(board[emptyCellIndex[0]][emptyCellIndex[1]])
    elementToSwap.setAttribute("id", "temp");
    elementZero.innerHTML = board[indexY][indexX];
    elementZero.setAttribute("id", elementZero.innerHTML);
    elementToSwap.setAttribute("id", tmpID);
    elementToSwap.innerHTML = '0';

    board[emptyCellIndex[0]][emptyCellIndex[1]] = board[indexY][indexX];
    board[indexY][indexX]= 0;
}