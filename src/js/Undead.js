import Character from './Character.js';

export default class Undead extends Character {
    constructor(name) {
        super(name, 'Undead', 100, 1);
        this.attack = 25;
        this.defence = 25;
    }
}