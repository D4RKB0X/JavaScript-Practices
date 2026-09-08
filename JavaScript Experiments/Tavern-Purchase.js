// Parameterized version
let userGold = 100;

const item = [
    { name: "Healing Potion", price: 50 },
    { name: "Clarity Potion", price: 75 },
    { name: "Scroll of Town Portal", price: 100 }
];

function purchaseItem(name) {
    const selectedItem = item.find(i => i.name === name);

    if (!selectedItem) {
        console.log("Item not found.");
        return;
    }

    userGold -= selectedItem.price;

    console.log(`Attempting to purchase: ${selectedItem.name} for ${selectedItem.price} gold.`);
    console.log(`User has ${userGold} gold left.`);
}

purchaseItem("Healing Potion");

// Variable-based version
let playerGold = 100;
const potionPrice = 50;

function buyPotion() {
    if (playerGold >= potionPrice) {
        playerGold -= potionPrice;
        console.log("Potion purchased! Remaining gold: " + playerGold);
    }
    
    else {
        console.log("Not enough gold to buy a potion.");
    }
}

buyPotion();
