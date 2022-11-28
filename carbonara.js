let spaghetti = 400;
let guanciale = 250;
let eggYolk = 6;
let cheese = 50;
let pepper = 4;

// Step 1: Egg Yolk + Cheese
let eggCheese = eggYolk + cheese;

// Step 2: Step 1 + pepper (2g)
let eggCheesePepper = eggCheese + (pepper * 0.3);

// Step 3: Spaghetti + gaunciale
let spaghettiGuanciale = spaghetti + guanciale;

// Step 4: Step 3 + Step 2
let dishWithoutSeasoning = spaghettiGuanciale + eggCheesePepper;

// Step 5: Step 4 + Pepper (2g) = carbonara
let carbonara = dishWithoutSeasoning + (pepper * 0.7);
console.log(carbonara);