const a = 10;
const b = 100;

// Greater than
const isABiggerThanB = a > b;
console.log(isABiggerThanB); // false

// Equal
const isAEqualToB = a == b;
console.log(isAEqualToB); // false

// Not equal
const isANotEqualToB = a != b;
console.log(isANotEqualToB); // true

// Strict equal
// It will be false if the variables are not same type
const isAStrictEqualToB = a === b;
console.log(isAStrictEqualToB); // false

// Strict not equal
const isANotStrictEqualToB = a !== b;
console.log(isANotStrictEqualToB); // true

// Greater than or equal to
const isAGreaterThanEqualToB = a >= b;
console.log(isAGreaterThanEqualToB); // false

// Less than
const isALessThanB = a < b;
console.log(isALessThanB); // true

// Less than or equal to
const isALessThanEqualToB = a <= b;
console.log(isALessThanEqualToB); // true
