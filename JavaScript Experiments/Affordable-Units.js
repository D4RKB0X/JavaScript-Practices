const Barracks = [
    { name: "Footman", trainigTime: 2, foodCost: 2 },
    { name: "Archer", trainigTime: 3, foodCost: 2 },
    { name: "Grunt", trainigTime: 2, foodCost: 3 }
];

let totalTrainingTime = 0;
let totalFoodCost = 0;

for (const unit of Barracks) {
    totalTrainingTime += unit.trainigTime;
    totalFoodCost += unit.foodCost;
}

const affordableUnits = Barracks.filter(unit => unit.foodCost <= 2);

for (const unit of affordableUnits) {
    console.log(unit.name);
}
