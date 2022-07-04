import { generateBoard, isBoardSolvable } from "./controller.js";
import { drawBoard } from "./view.js";

class Starter {
    start() {
        let board = generateBoard(3);
        while (!isBoardSolvable(board)) {
            board = generateBoard(3);
        }
        console.log(board);
        drawBoard([[1,2,3],[4,5,6],[7,0,8]]);
    }
}

let starter = new Starter();
starter.start();