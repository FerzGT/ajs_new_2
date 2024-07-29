import Character from './domain.js';

export default class Magician extends Character {
    constructor(name) {
        super(name, 'Magician', 100, 1, 10, 40);
    }
}