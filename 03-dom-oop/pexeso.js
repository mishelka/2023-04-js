const getRandomNumber = max => Math.floor(Math.random() * max);
let pexesoField;

const renderPexesoField = () => {
    const pexesoTable = document.querySelector("#pexesoField");
    pexesoTable.innerHTML = '';

    let fieldStr = '';
    for(let r in pexesoField.tiles) {
        fieldStr = fieldStr + '<tr>';
        for(let c in pexesoField.tiles[r]) {
            const tile = pexesoField.tiles[r][c];

            fieldStr = fieldStr + `
                <td class="${tile.state === 'closed' ? 'closed' : ''}"
                    onclick="pexesoField.open(${r}, ${c})">
                    ${tile.state === 'open' ? tile.value : "&nbsp;"}
                </td>
            `;
        }
        fieldStr = fieldStr + '</tr>';
    }

    pexesoTable.innerHTML = fieldStr;

    const scoreElem = document.querySelector("#score");
    scoreElem.innerHTML = pexesoField.score;
};

document.addEventListener("DOMContentLoaded", async () => {
    pexesoField = new PexesoField(4, 5);
    renderPexesoField();
});