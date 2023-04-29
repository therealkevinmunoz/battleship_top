import {Ship} from './ship';

test('add 1 hit to ship', () => {
    const ship1 = new Ship('Carrier', 5);
    ship1.hit()
    expect(ship1.getHits()).toBe(1);
})

test('name ship Battleship', () => {
    const ship2 = new Ship('Battleship', 4);
    expect(ship2.name).toMatch(/^Battleship/);
})

test('sink ship', () => {
    const ship2 = new Ship('Battleship', 4);
    for(let i = 0; i < 4; i++)
    {
        ship2.hit()
        console.log(ship2.getHits())
    }
    expect(ship2.isShipSunk).toBeTruthy();
})

test('dont sink ship', () => {
    const ship2 = new Ship('Battleship', 4);
    for(let i = 0; i <= 2; i++)
    {
        ship2.hit()
    }
    expect(ship2.isShipSunk()).toBeFalsy();
})