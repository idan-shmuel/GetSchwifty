function drawBoard(board) {
    let boardTable = document.createElement('boardTable');
    let boardTableBody = document.createElement('boardTableBody');

    board.forEach(function(rowData) {
        let row = document.createElement('tr');

        rowData.forEach(function(cellData) {
            let cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        boardTableBody.appendChild(row);
    });

    boardTable.appendChild(boardTableBody);
    document.body.appendChild(boardTable);
}