import Character from './Character.js';

export default class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon', 100, 1);
        this.attack = 10;
        this.defence = 40;
    }
}