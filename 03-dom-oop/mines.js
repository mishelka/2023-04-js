let rowCount = 4;
let columnCount = 4;
let mineCount = 2;

class Tile {
    constructor(value) {
        this.value = value;
        this.state = 'closed';
    }
}

let tiles = [];

const getRandomCoordinate = max => Math.floor(Math.random() * max);

const countAdjacentMines = (row, col) => {
    let countedMines =  0;
    for(let r = row - 1; r <= row + 1; r++) {
        if(r >= 0 && r < rowCount) {
            for(let c = col - 1; c <= col + 1; c++) {
                if(c >= 0 && c < columnCount) {
                    if((r != row && c != col)
                        && tiles[r][c]?.value === '*') {
                        countedMines++;
                    }
                }
            }
        }
    }
    return countedMines;
}

const generateField = () => {
    //create an empty field
    tiles = [];
    
    for (let r = 0; r < rowCount; r++) {
        const row = [];
        for (let c = 0; c < columnCount; c++) {
            row.push(null);
        }
        tiles.push(row);
    }


    //generate mines to random positions
    let mines = 0;
    do {
        const row = getRandomCoordinate(rowCount);
        const col = getRandomCoordinate(columnCount);

        if(tiles[row][col] === null) {
            tiles[row][col] = new Tile('*');
            mines++;
        }
    } while (mines < mineCount);

    //fill with clues
    for (const r in tiles) {
        for (const c in tiles[r]) {
            if(tiles[r][c] === null) {
                tiles[r][c] = new Tile(countAdjacentMines(r, c));
            }
        }
    }
}

const renderMineField = () => {
    const mineField = document.querySelector('#mineField');

    let rowStr = '';
    for (let r in tiles) {
        rowStr = rowStr + '<tr>\n';
        for (let c in tiles[r]) {
            const tile = tiles[r][c];
            rowStr = rowStr + `
                <td class="${tile.state} ${tile.value === '*' ? 'mine': ''}"
                    onclick="openTile(${r}, ${c})"
                    oncontextmenu="markTile(${r}, ${c}, event)">
                    ${tile.state === 'open' && tile.value != 0 ? tile.value : '&nbsp;'}
                </td>\n
            `;
        }
        rowStr = rowStr + '</tr>\n';
    }
    mineField.innerHTML = rowStr;
}

const openTile = (rowIndex, colIndex) => {
    tiles[rowIndex][colIndex].state = 'open';
    renderMineField();

    if(tiles[rowIndex][colIndex].value === '*') {
        alert("You lose!");
    }
}

const markTile = (rowIndex, colIndex, event) => {
    event.preventDefault();

    const tile = tiles[rowIndex][colIndex];

    if (tile.state === 'closed') {
        tile.state = 'marked';
    } else if(tile.state === 'marked') {
        tile.state = 'closed';
    }

    renderMineField();
}

document.addEventListener("DOMContentLoaded", async () => {
    generateField();
    renderMineField();
});