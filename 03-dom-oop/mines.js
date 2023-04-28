let rowCount = 4;
let columnCount = 4;

let tiles = [
    [
        {
            state: 'closed',
            value: 1
        }, //tiles[0][0]
        {
            state: 'closed',
            value: '*'
        }, //tiles[0][1]
        {
            state: 'closed',
            value: 1
        }, //tiles[0][2]
        {
            state: 'closed',
            value: 0
        } //tiles[0][3]
    ], //tiles[0]
    [
        {
            state: 'closed',
            value: 1
        }, //tiles[1][0]
        {
            state: 'closed',
            value: 2
        }, 
        {
            state: 'open',
            value: 2
        }, 
        {
            state: 'closed',
            value: 1
        }
    ], //tiles[1]
    [
        {
            state: 'marked',
            value: 0
        }, 
        {
            state: 'closed',
            value: 1
        }, 
        {
            state: 'closed',
            value: '*'
        }, 
        {
            state: 'closed',
            value: 1
        }
    ], //tiles[2]
    [
        {
            state: 'closed',
            value: 0
        }, 
        {
            state: 'closed',
            value: 1
        }, 
        {
            state: 'closed',
            value: 1
        }, 
        {
            state: 'closed',
            value: 1
        }
    ] //tiles[3]
];

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
    // console.log(rowStr);
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
    renderMineField();
});