let heroXP = 0;
let heroLevel = 1;

function levelUp() {
    while (heroXP >= 100) {
        heroLevel++;
        heroXP -= 100;
    }

    console.log(`Congratulations! You've leveled up to level ${heroLevel}!`);
}

function completedQuest(xp) {
    heroXP += xp;

    console.log(`Quest completed! Gained ${xp} XP. Total XP: ${heroXP}`);

    levelUp();
}

completedQuest(350);
