import Undead from '../Undead.js';

test('New Undead', () => {
    const undead = new Undead('Undy');
    expect(undead).toEqual({
        name: 'Undy',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});