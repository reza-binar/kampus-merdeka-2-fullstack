// Declare x variable
let x = 10;

// additional assignment operator
x += 5; // x = x + 5 ==> x = 10 + 5 = 15

console.log('x:', x); // x: 15

// Object
let person = { name: 'Reza', age: 24, job: 'student' };

// Array
let fruits = ['Mango', 'Apple', 'Banana'];

// Assignment to object
person.name = 'Alfareza';
console.log('person:', person); // person: { name: 'Alfareza', age: 24 }

// Assignment to array
fruits[0] = 'Orange';
console.log('fruits:', fruits); // fruits: ['Orange', 'Apple', 'Banana']

// destructuring assignment
let { name, job } = person;
let [firstFruit, secondFruit] = fruits;

console.log('name:', name); // name: 'Alfareza'
console.log('job:', job); // job: 'student'
console.log('firstFruits:', firstFruit); // firstFruits: 'Orange'
console.log('secondFruits:', secondFruit); // secondFruits: 'Apple'
