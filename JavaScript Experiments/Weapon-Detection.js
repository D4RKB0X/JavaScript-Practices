const inventory = [
    { name: "Healing Potion", type: "Consumable" },
    { name: "Claws of Attack", type: "Weapon" },
    { name: "Scroll of Town Portal", type: "Consumable" }
];

const hasWeapon = inventory.some(item => item.type === "Weapon");
console.log(hasWeapon);
