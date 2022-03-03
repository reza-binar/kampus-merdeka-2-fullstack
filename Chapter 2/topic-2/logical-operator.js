console.log(1 && 10); // Output: 10, because 1 is true and 10 is true
console.log(0 || 100); // Output: 100, because 0 is false and 100 is true
console.log(true && false); // Output: false
console.log((true && false) || 'Ya elah'); // Output: Ya elah

const g = 10;
const h = 100;

if ((g * h) % 100 === 0) console.log('OK!');
// Output: OK!
