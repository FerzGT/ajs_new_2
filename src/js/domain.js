export default class Character {
    constructor(name, type, health, level, attack, defence) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('Invalid name length');
        }
        if (!types.includes(type)) {
            throw new Error('Invalid character type');
        }
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;

    }
    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else {
            throw new Error('You cannot raise the level with zero health');
        }
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}