import Character from './domain.js';

export default class Undead extends Character {
    constructor(name) {
        super(name, 'Undead', 100, 1, 25, 25);
    }
}