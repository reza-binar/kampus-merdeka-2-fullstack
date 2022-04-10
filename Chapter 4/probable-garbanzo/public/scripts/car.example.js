class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  render() {
    return `
      <div class="card h-100">
        <img src="${
          this.image
        }" class="card-img-top" style="object-fit: cover; height: 300px" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.manufacture} ${this.model}</h5>
          <p class="card-text fw-bold">${this.formatRupiah(
            this.rentPerDay
          )} / hari</p>
          <p class="card-text text-truncate">${this.description}</p>
          <div class="d-grid gap-2">
            <a href="#" class="btn btn-primary">Pilih Mobil</a>
          </div>
        </div>
      </div>
    `;
  }
}
