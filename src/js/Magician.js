import Character from './Character.js';

export default class Magician extends Character {
    constructor(name) {
        super(name, 'Magician', 100, 1);
        this.attack = 10;
        this.defence = 40;
    }
}