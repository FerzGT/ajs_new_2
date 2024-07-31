import Bowman from '../Bowerman.js';

test('Inflict damage to character', () => {
    const testChar = new Bowman('Bowy', 'Bowman', 25, 25);
    testChar.damage(50);
    expect(testChar).toEqual({
        name: 'Bowy',
        type: 'Bowman',
        health: 62.5,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('The value of health cannot be negative', () => {
    const testChar = new Bowman('Bowy', 'Bowman', 100, 1, 25, 25);
    testChar.health = 0;
    testChar.damage(50);
    expect(testChar.health).toEqual(0);
});

test('Go to the next level', () => {
    const testChar = new Bowman('Bowy', 'Bowman', 100, 1, 25, 25);
    testChar.levelUp();
    expect(testChar).toEqual({
        name: 'Bowy',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    });
});

test('Go to the next level with zero health', () => {
    const testChar = new Bowman('Bowy', 'Bowman', 100, 1, 25, 25);
    testChar.health = 0;
    expect(() => testChar.levelUp()).toThrow(
        'You cannot raise the level with zero health',
    );
});

test('New Bowman', () => {
    const bowman = new Bowman('Bowy');
    expect(bowman).toEqual({
        name: 'Bowy',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});