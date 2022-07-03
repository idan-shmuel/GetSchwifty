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