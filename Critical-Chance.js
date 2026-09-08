const blmstr = "Blademaster";

let criticalChance = 0.25;
const chance = Math.random();

function criticalHit() {
    let damage = 20;

    if (chance <= criticalChance) {
        damage *= 2;
        console.log(`Critical hit! ${blmstr} deals ${damage} damage.`);
    }

    else {
        console.log(`${blmstr} deals ${damage} damage.`);
    }
}

criticalHit();
criticalHit();
