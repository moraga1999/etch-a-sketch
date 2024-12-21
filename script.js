let rowsBoard = 16;
let columnsBoard = 16;

function renderBoard(rowsBoard, columnsBoard) {
    const container = document.querySelector("#container");
    for (let rowIndex = 0; rowIndex < rowsBoard; rowIndex++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        container.appendChild(rowDiv);
        for (let columnIndex = 0; columnIndex < columnsBoard; columnIndex++) {
            let columnItem = document.createElement("div");
            columnItem.classList.add("item");
            rowDiv.appendChild(columnItem);
        }
    }
}

renderBoard(rowsBoard, columnsBoard);
