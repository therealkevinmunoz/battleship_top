export class Ship {
    constructor(name, length) {
        this.name = name
        this.length = length
        this.hits = 0
        this.isSunk = false
    }

    getName() {
        return this.name
    }

    getHits() {
        return this.hits
    }

    hit() {
        this.hits += 1
    }

    isShipSunk() {
        this.hits >= this.length? true : false 
    }
}

/* Battleship ships:
Carrier	5
Battleship	4
Destroyer	3
Submarine	3
Patrol Boat	2
*/