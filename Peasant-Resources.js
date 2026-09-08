const name = "Peasant";
let gold = 100;
let lumber = 50;

function gatherResources() {
    gold += 10;
    lumber += 5;
    console.log(`${name} gathered resources. Gold: ${gold}, Lumber: ${lumber}`);
}

gatherResources();
