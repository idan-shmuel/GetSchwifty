import { GenerateBoard } from "./controller/GenerateBoard.js";
import { InitBoard } from "./view/InitBoard.js";

class Starter {
    start() {
        let generateBoard = new GenerateBoard();
        let board = generateBoard.generateSolvableBoard(3);
        console.log(board);
        let initBoard = new InitBoard();
        initBoard.drawBoard([[1,2,3],[4,5,6],[7,0,8]]);
    }
}

let starter = new Starter();
starter.start();