const ftmn = "Footman";
const damage = 100;

const grnt = "Grunt";
let health = 150;

function attack() {
    if (health <= 0) {
        console.log(`${grnt} has been defeated!`);
        return;
    }
    
    else if (damage >= health) {
        health = 0;
        console.log(`${grnt} has been decimated!`);
        return;
    }

    health -= damage;

    console.log(`${ftmn} attacks ${grnt} for ${damage} damage!`);
    console.log(`${grnt} has ${health} health remaining.`);
}

for (let i = 0; i < 5; i++) {
    if (health <= 0) {
        console.log(`${grnt} cannot be attacked anymore.`);
        break;
    }

    attack();
}
