

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
