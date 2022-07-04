import { GameOver } from "../controller/GameOver.js";
import { SwipeElementPlace } from "../controller/SwipeElementPlace.js";

export class InitBoard {
    drawBoard(board) {
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
            let swipeElementPlace = new SwipeElementPlace();
            let positionToSwipe = swipeElementPlace.getPressedButton(event, board);
            let indexY = positionToSwipe[0];
            let indexX = positionToSwipe[1];

            let emptyCellIndex = swipeElementPlace.getIndexOfEmptyCell(board, indexY, indexX);
            if (emptyCellIndex !== []) {
                swipeElementPlace.swipeBetweenTwoElements(board, indexY, indexX, emptyCellIndex);
                let gameOver = new GameOver();
                if (gameOver.isGameFinished(board)) {
                    alert("win");
                }
            }
        }
    }
}