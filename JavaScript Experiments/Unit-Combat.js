class Unit {
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    getUnitName() { return this.name; }
    getUnitHealth() { return this.health; }
    getUnitDamage() { return this.damage; }

    attackTarget(targetUnit) {
        if (targetUnit.health <= 0) {
            console.log(`${targetUnit.name} is dead!`);
            return;
        }

        targetUnit.health -= this.damage;

        console.log(`${this.name} attacks ${targetUnit.name}`);
        console.log(
            `${targetUnit.name} takes ${this.damage} | Remaining HP: ${targetUnit.health}`
        );
    }

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

ftmn.attackTarget(achr);
