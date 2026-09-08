let playerGold = 100;

function openCreate() {
    let bonusGold = 50;
    playerGold += bonusGold;
}

function updateGoldDisplay() {
    console.log(`Player Gold: ${playerGold}`);
}

updateGoldDisplay();
openCreate();
updateGoldDisplay();
