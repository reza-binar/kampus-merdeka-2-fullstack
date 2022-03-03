const x = 1;
const y = 2;
const z = 3;

function sayIfOdd(number) {
  if (number % 2 !== 0) {
    console.log(number, 'Itu ganjil!');
  }
}

sayIfOdd(x); // Output: 1 Itu ganjil!
sayIfOdd(y);
sayIfOdd(z); // Output: 3 Itu ganjil!

/* 
  Output:
  1 itu ganjil!
  3 itu ganjil!
*/
