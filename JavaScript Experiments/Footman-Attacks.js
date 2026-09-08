const name = "Footman";
let health = 420;
const damage = 18;

function attack() {
    health -= damage;
    console.log(`${name} attacks for ${damage} damage!`);
    console.log(`${name} has ${health} health remaining.`);
}

for (let i = 0; i < 5; i++) {
    attack();
}
