const i = 10;
const urang = { name: 'Reza', age: 24, ktpNumber: 1234567890123456 };

delete urang.ktpNumber;
console.log(urang); // Output: { name: 'Reza', age: 24 }

console.log(typeof urang); // Output: object

console.log(typeof i); // Output: number
