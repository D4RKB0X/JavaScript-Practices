let playerGold = 100;

function sellItem(price) {
    playerGold += price;
    console.log(`Item sold for ${price} gold. Remaining gold: ${playerGold}`);
}

sellItem(50);
sellItem(25);
sellItem(0);
sellItem(-50);
sellItem("50");
