export class GenerateBoard {
    generateBoard(rowSize) {
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
}

