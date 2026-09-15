const army = [
    { name: "Footman", type: "Human" },
    { name: "Grunt", type: "Orc" },
    { name: "Archer", type: "Human" }
];

console.log("Original Army:");

for (const unit of army) {
    console.log(`Name: ${unit.name} | Type: ${unit.type}`);
}

const polymorph = army.map(unit => ({
    name: unit.name,
    type: "Sheep"
}));

console.log("\nPolymorphed Army:");

for (const unit of polymorph) {
    console.log(`Name: ${unit.name} | Type: ${unit.type}`);
}
