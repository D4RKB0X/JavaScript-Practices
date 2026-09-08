let playerGold = 100;

function openCreate(bonusGold) {
    playerGold += bonusGold;
}

function updateGoldDisplay() {
    console.log(`Player Gold: ${playerGold}`);
}

updateGoldDisplay();
openCreate(50);
updateGoldDisplay();
