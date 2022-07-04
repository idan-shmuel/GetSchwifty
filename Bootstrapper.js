import {GenerateBoard} from "./controller/GenerateBoard.js";
import {InitBoard} from "./view/InitBoard.js";

export class Bootstrapper {
    bootstrap() {
        let generateBoard = new GenerateBoard();
        let board = generateBoard.generateSolvableBoard(3);
        return new InitBoard(board);
    }
}