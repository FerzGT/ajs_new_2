import Character from './domain.js';

export default class Bowman extends Character {
    constructor(name) {
        super(name, 'Bowman', 100, 1, 25, 25);
    }
}