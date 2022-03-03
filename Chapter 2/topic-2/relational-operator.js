const stockFruits = ['Mango', 'Orange', 'Apple'];
const orang = { name: 'Reza', age: 24, ktpNumber: 1234567890123456 };

const isMyFavouriteFruitInStock = 0 in stockFruits;
console.log(isMyFavouriteFruitInStock); // Output: true

const doesPersonHaveKtp = 'ktpNumber' in orang;
console.log(orang.name, doesPersonHaveKtp ? 'has KTP' : 'does not have KTP'); // Output: Reza has KTP

console.log(orang instanceof Date); // Output: false

const date = new Date(); // Today
console.log(date instanceof Date); // Output: true
