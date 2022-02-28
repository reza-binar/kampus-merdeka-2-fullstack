/* Var declaration in advance */
var harga; // Declaration
harga = 1000; // Assignment

/* Var declaration and assignment */
var harga = 1000;

/* Start Scope */
var diskon = 500; // Global scope
if (true) {
  var diskon = 300; // Global scope
}
console.log(diskon);
// Output: 300
// because diskon is global scope

/* Sebelum ada ES6, solusi membuat function scope -> local scope */
var diskon = 500; // Global scope
function diskonScope() {
  var diskon = 300; // Local scope
  console.log(diskon);
}
diskonScope();
console.log(diskon);
/* End Scope */

/* Start Reassigned and Redeclared */
var nama; // Declare
console.log(nama); // Output: undefined

nama = 'Bot'; // Assignment
console.log(nama); // Output: Bot

var nama = 'Bot Reza'; // Reassigned
console.log(nama); // Output: Bot Reza
/* End Reassigned and Redeclared */

/* Start hoisting */
nama = 'Mentor Reza';
var nama;
console.log(nama); // Output: Mentor Reza

// Background execution
var nama;
nama = 'Mentor Reza';
console.log(nama); // Output: Mentor Reza
/* End hoisting */
