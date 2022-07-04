import {Bootstrapper} from "./Bootstrapper.js";

class Starter {
    start() {
        let bootstrapper = new Bootstrapper();
        let initBoard = bootstrapper.bootstrap()
        initBoard.drawBoard();
    }
}

let starter = new Starter();
starter.start();