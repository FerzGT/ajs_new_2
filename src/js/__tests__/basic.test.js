import Character from '../Character.js';

test('New character with invalid name (too short)', () => {
    expect(
        () => new Character('O', 'Bowman', 100, 1, 25, 25),
    ).toThrow('Invalid name length');
});

test('New character with invalid name (too long)', () => {
    expect(
        () => new Character('LooooooongName', 'Daemon', 100, 100),
    ).toThrow('Invalid name length');
});

test('New character with invalid character type', () => {
    expect(
        () => new Character('Bowy', 'FakeBowman', 100, 100),
    ).toThrow('Invalid character type');
});