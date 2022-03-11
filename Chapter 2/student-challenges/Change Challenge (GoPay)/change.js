// IDR money available
const moneyChange = [
  100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100,
];

// Function to change money
function change(money, price) {
  // Array to store the change
  let change = [];
  // Calculate the change total
  let changeMoney = money - price; // 55000

  // Check if the change is negative or the change less than 0
  if (changeMoney % 100 !== 0 || changeMoney < 0) {
    return 'Tidak valid';
  }

  // Loop through the moneyChange array
  for (let i = 0; i < moneyChange.length; i++) {
    // while change money grether than moneyChange[i]
    while (changeMoney >= moneyChange[i]) {
      // push the moneyChange[i] to change array
      change.push(moneyChange[i]);
      // subtract the moneyChange[i] from changeMoney
      changeMoney -= moneyChange[i];
    }
  }

  // Return the change array
  return change;
}

console.log(change(100000, 45500)); // Output: [ 50000, 2000, 2000, 500 ]
console.log(change(20000, 50000)); // Output: Tidak valid
console.log(change(40050, 30000)); // Output: Tidak valid
