/* Make direct variable */
let pesan = 'Hello World!';
console.log(pesan);

/* Make many variables */
let jeneng = 'Reza',
  umur = 24,
  jenisKelamin = 'laki-laki';

console.log(jeneng); // Ouput: Reza
console.log(umur); // Output: 24
console.log(jenisKelamin); // Output: laki-laki

/* Start scope */
let discount = 500; // Global scope
if (true) {
  let discount = 300; // Local scope
  console.log(discount); // Output: 300
}
console.log(discount); // Output: 500
/* End scope */

/* Start Reassigned and Redeclared */
let nami; // Declaration
console.log(nami); // Output: undefined

nami = 'Reza'; // Assigned
console.log(nami); // Output: Reza
nami = 'Alfareza'; // Reassigned
console.log(nami); // Output: Alfareza
// let nami = 'Fahmi'; // Error because let can not be redeclared
// console.log(nami);
/* End Reassigned and Redeclared */

/* Start hoisting */
let message = 'Hello';
function greetings() {
  let message = 'Hello World!';
  console.log(message);
}
greetings();
/* End hoisting */
