const container = document.querySelector("#container");

function renderBoard(squares) {    
    for (let rowIndex = 0; rowIndex < squares; rowIndex++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        container.appendChild(rowDiv);
        for (let columnIndex = 0; columnIndex < squares; columnIndex++) {
            let columnItem = document.createElement("div");
            squareSize = 800 / squares;
            columnItem.style.cssText = `width: ${squareSize}px; height: ${squareSize}px;`;
            columnItem.addEventListener("mouseover", () => {
                columnItem.style.backgroundColor = "black";
            });
            rowDiv.appendChild(columnItem);
        }
    }
}

function removeSquares() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function setSquares() {
    squares = prompt("Squares per row:");
    removeSquares();
    renderBoard(parseInt(squares));
}

renderBoard(16);
