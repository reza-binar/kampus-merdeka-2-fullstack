const Dog = require("./Dog");

describe("Dog", () => {
  it("should have name called 'Arnold'", () => {
    const dog = new Dog("Arnold");

    expect(dog).toHaveProperty("name", "Arnold");
  });

  it("should be able to bark and return 'Woof!'", () => {
    const dog = new Dog("Arnold");
    expect(dog.bark()).toEqual("Woof!");
  });
});
