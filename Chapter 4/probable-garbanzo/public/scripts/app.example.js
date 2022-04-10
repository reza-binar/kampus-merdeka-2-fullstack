class App {
  constructor() {
    this.driverInput = document.getElementById("driver-input");
    this.dateInput = document.getElementById("date-input");
    this.timeInput = document.getElementById("time-input");
    this.passangerInput = document.getElementById("passanger-input");
    this.findButton = document.getElementById("find-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    this.findButton.onclick = this.find;
  }

  find = () => {
    if (
      this.driverInput.value === "" ||
      this.dateInput.value === "" ||
      this.timeInput.value === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    const filteredCars = Car.list.filter((car) => {
      const date = new Date(this.dateInput.value + "T" + this.timeInput.value);
      const carAvailibility = new Date(car.availableAt);
      let returnedCar = date > carAvailibility;

      if (this.passangerInput.value !== "") {
        returnedCar =
          returnedCar && car.capacity >= Number(this.passangerInput.value);
      }

      return returnedCar;
    });

    this.carContainerElement.innerHTML = "";

    filteredCars.forEach((car) => {
      const node = document.createElement("div");
      node.className = "col-md-3 my-2";
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
