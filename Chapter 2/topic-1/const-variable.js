const bumi = 'bulat';
const aku = 'reza';
const pi = 3.14;

/* Start Uppercase Constant */
const WARNA_MERAH = '#F00';
const WARNA_BIRU = '#00F';
const WARNA_HIJAU = '#0F0';

/* If we want to call, we just need to call the variable */
const warnaBaju = WARNA_BIRU;
console.log(warnaBaju);
/* End Uppercase Constant */

/* Start Scope */
const dskn = 500; // global scope
if (true) {
  // start of local scope
  const dskn = 300; // local scope
  console.log(dskn); // Output: 300
} // end of local scope
console.log(dskn); // Output: 500
/* End Scope */

/* 
  Start Reassigned and Redeclared
  const can't be both reassigned and redeclared
*/
// bumi = 'datar'; // const can not be reassigned
// Or
// const bumi = 'datar'; // const can not be redeclared
/* End Reassigned and Redeclared */

/* 
  Start hoisting 
  You can't hoisting the cost variable  
*/
// const namo;
// namo = "reza";
// console.log(namo); // Output: error
/* End hoisting */
