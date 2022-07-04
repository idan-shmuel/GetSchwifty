export class SwipeElementPlace {
    getPressedButton(event, board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] == event.target.innerHTML) {
                    return [i,j];
                }
            }
        }
    }

    getIndexOfEmptyCell(board, indexY, indexX) {
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

    swipeBetweenTwoElements(board, indexY, indexX, emptyCellIndex) {
        let tmpID = board[emptyCellIndex[0]][emptyCellIndex[1]];
        let elementToSwap = document.getElementById(board[indexY][indexX])
        let elementZero = document.getElementById(board[emptyCellIndex[0]][emptyCellIndex[1]])
        elementToSwap.setAttribute("id", "temp");
        elementZero.innerHTML = board[indexY][indexX];
        elementZero.setAttribute("id", elementZero.innerHTML);
        elementToSwap.setAttribute("id", tmpID);
        elementToSwap.innerHTML = '';

        board[emptyCellIndex[0]][emptyCellIndex[1]] = board[indexY][indexX];
        board[indexY][indexX]= 0;
    }
}