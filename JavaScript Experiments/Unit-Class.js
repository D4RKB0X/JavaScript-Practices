class Unit {
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    getUnitName() { return this.name; }
    getUnitHealth() { return this.health; }
    getUnitDamage() { return this.damage; }

    printDetails() {
        console.log(
            `Name: ${this.name} | Health: ${this.health} | Damage: ${this.damage}`
        );
    }
}

const ftmn = new Unit("Footman", 420, 15);
const achr = new Unit("Archer", 250, 20);

ftmn.printDetails();
achr.printDetails();
