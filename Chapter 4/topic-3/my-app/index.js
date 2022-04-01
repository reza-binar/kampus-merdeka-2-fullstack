// Import core module
const os = require("os");
const fs = require("fs"); // file system module

// Import third party module
// const chalk = require("chalk");

// Import local module
const { kelilingSegitiga, luasSegitiga } = require("./segitiga");

// Check free RAM (in bytes) -- core module
console.log("Free memory:", os.freemem());

// third party module
// chalk.blue("Hello world!");

// local module
console.log(luasSegitiga(10, 5));
console.log(kelilingSegitiga(10));

/* Using fs */
// Read file
const isi = fs.readFileSync("./text.txt", "utf-8"); // read file synchronously
console.log(isi);

// Write file
fs.writeFileSync("./test.txt", "YNTKTS!");

// Make json file
const createPerson = function (person) {
  fs.writeFileSync("./person.json", JSON.stringify(person));
  return person;
};

const bryan = createPerson({
  name: "Bryan",
  age: 20,
  address: "Pemalang",
});

// Read the json file
const person = JSON.parse(fs.readFileSync("./person.json"));
console.log(person);
