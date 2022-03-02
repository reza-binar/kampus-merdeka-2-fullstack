/* Start String Data Type */
const asma = "Fahm'i Alfareza"; // String
let address = 'Magelang ("Jateng")'; // String

console.log(asma);
console.log(address);
console.log('Breeze'); // String
/* End String Data Type */

/* Start Number Data Type */
const x = 10; // Integer
const y = 100; // Integer
let z = 1.1; // Float

console.log(x + y + z); // Output: 121.1
/* End Number Data Type */

/* Start Boolean */
const isRaining = false;
const isExhausted = true;
let shouldRunFromReality = true;
/* End Boolean */

/* Start null */
let seseorangDiHatiku = null;
console.log(seseorangDiHatiku);

seseorangDiHatiku = 'Kamu';
/* End null */

/* Start undefined */
let tujuanHidupku;
let artiKebahagiaan = undefined;

console.log(tujuanHidupku); // undefined
console.log(artiKebahagiaan); // undefined
/* End undefined */

/* Start Array */
const catNames = ['Oyen', 'Bob'];

// Call Oyen
console.log(catNames[0]);
// Call Bob
console.log(catNames[1]);

let favouriteNumbers = [1, 2, 10];
favouriteNumbers[0] = 100;
console.log(favouriteNumbers); // [100, 2, 10]
/* End Array */

/* Start Object */
const people = [
  {
    name: 'Reza',
    age: 24,
    isMarried: false,
    pets: [
      {
        name: 'Oyen',
        speciesName: 'Cat',
      },
      {
        name: 'Bob',
        speciesName: 'Cat',
      },
    ],
  },
  {
    name: 'Alfa',
    age: 24,
    isMarried: false,
    pets: [
      {
        name: 'Rafi',
        speciesName: 'Cat',
      },
    ],
  },
];

console.log(people[0].name); // Reza
console.log(people[1]['age']); // 24
console.log(people[0].pets[0].name); // Oyen
/* End Object */

/* Start Arif Challenge */
const cats = [
  {
    name: 'Oyen',
    age: 1,
    friends: [
      {
        name: 'Bob',
        speciesName: 'Cat',
      },
      {
        name: 'Rafi',
        speciesName: 'Cat',
      },
    ],
  },
];

console.log(cats[0].friends[1].name);
/* End Arif Challenge */
