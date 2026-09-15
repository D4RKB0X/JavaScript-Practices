const army = [
    { name: "Footman", alive: false },
    { name: "Archer", alive: false },
    { name: "Grunt", alive: true }
];

const deadUnits = army.filter(unit => unit.alive === false);
const animatedDead = deadUnits.map(unit => unit.name);

// Alternative:
// const animatedDead = army.filter(unit => unit.alive === false).map(unit => unit.name);

for (const unit of animatedDead) {
    console.log(`Skeleton ${unit}`);
}
