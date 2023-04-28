class PexesoTile {
    constructor(value) {
        this.value = value;
        this.state = 'closed';
    }

    open() {
        this.state = 'open';
    }

    close() {
        this.state = 'closed';
    }
}

class PexesoField {
    constructor(rowCount, colCount) {
        this.rowCount = rowCount;
        this.colCount = colCount;
        this.tiles = [];
        this.generate();
        this.firstOpenTile = null;
        this.secondOpenTile = null;
        this.score = 0;
    }

    getTile(row, col) {
        return this.tiles[row][col];
    }

    setTile(row, col, tile) {
        this.tiles[row][col] = tile;
    }

    noTile(row, col) {
        return this.tiles[row][col] === null;
    }

    generate() {
        this.tiles = [];
        let neededTiles = this.rowCount * this.colCount / 2;

        for(let r = 0; r < this.rowCount; r++) {
            const row = [];
            for (let c = 0; c < this.colCount; c++) {
                row.push(null);
            }
            this.tiles.push(row);
        }

        let currentNumber = 1;
        do {
            const row = getRandomNumber(rowCount);
            const col = getRandomNumber(columnCount);

            if(this.noTile(row, col)) {
                this.setTile(row, col, new PexesoTile(currentNumber));
                currentNumber++;
            }

        } while(currentNumber <= neededTiles);

        currentNumber = 1;
        for (const r in this.tiles) {
            for (const c in this.tiles[r]) {
                if(this.noTile(r, c)) {
                    this.setTile(r, c, new PexesoTile(currentNumber));
                    currentNumber++;
                }
            }
        }
        console.log(this.tiles);
    }

    open(row, col) {
        if(this.getTile(row, col).state === 'open') return;

        if(this.firstOpenTile === null) {
            this.firstOpenTile = this.getTile(row, col);
            this.firstOpenTile.open();
        } else if(this.secondOpenTile === null) {
            this.secondOpenTile = this.getTile(row, col);
            this.secondOpenTile.open();

            renderPexesoField();

            setTimeout(() => {
                console.log("zatvaram!");
                if(this.firstOpenTile.value === this.secondOpenTile.value) {
                    this.score = this.score + 10;
                } else {
                    this.firstOpenTile.close();
                    this.secondOpenTile.close();
                }
                this.firstOpenTile = null;
                this.secondOpenTile = null;
                renderPexesoField();
            }, 1000);
        }
        
        renderPexesoField();
    }
}