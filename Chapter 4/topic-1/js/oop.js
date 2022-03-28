class Human {
  // Static property
  static isLivingOnEarth = true;

  // Constructor
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  // Instance method
  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

// Add instance method to the prototype
Human.prototype.greet = function (name) {
  console.log(`Hi ${name}, I'm ${this.name}`);
};

// Add static method
Human.destroy = function (thing) {
  console.log(`Human is destroying ${thing}`);
};

// Child class
class Programmer extends Human {
  constructor(name, address, programmingLanguages) {
    // Call Human constructor --> new Human(name, address)
    super(name, address);
    this.programmingLanguages = programmingLanguages;
  }

  // Override method
  // introduce() {
  //   super.introduce(); // Call super class instance method
  //   console.log(`I can write`, this.programmingLanguages);
  // }

  // Overload method
  introduce(name) {
    super.introduce();
    console.log(`Hi ${name}, I'm ${this.name} and I'm a programmer`);
  }

  code() {
    console.log(
      `Code some`,
      this.programmingLanguages[
        Math.floor(Math.random() * this.programmingLanguages.length)
      ]
    );
  }
}

// Instantiation of Programmer
let fajar = new Programmer('Fajar', 'Madiun', ['JavaScript', 'Python']);
console.log(fajar); // Output: Programmer { name: 'Fajar', address: 'Madiun' }

// Checking if the instance is an instance of Programmer
console.log(fajar instanceof Human); // Output: true

fajar.introduce(`Vito`); // Output: Hi, I'm Fajar
fajar.greet('Arif'); // Output: Hi Arif, I'm Fajar
Programmer.destroy('Laptop'); // Output: Programmer is destroying Laptop
