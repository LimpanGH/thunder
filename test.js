const purchases = [2,4,6,8,4,8,4,3,7,9,8,4,3,56,9];

let total = 0;

for (let i = 0; i < purchases.length; i++) {
    total += purchases[i];
    console.log(purchases[i]);
}

console.log(`Total is: $${total}`);
