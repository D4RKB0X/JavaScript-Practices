const army = [
    { name: "Footman", type: "Human", role: "Soldier" },
    { name: "Archer", type: "Human", role: "Ranged" },
    { name: "Blademaster", type: "Orc", role: "Hero" },
    { name: "Grunt", type: "Orc", role: "Soldier" }
];

const findHero = army.find(unit => unit.role === "Hero");

console.log(`Hero Found: ${findHero.name}`);
