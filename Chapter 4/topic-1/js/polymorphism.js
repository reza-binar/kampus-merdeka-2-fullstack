class Human {
  constructor(name, address) {
    this.name = name;
    this.address = address;

    if (this.constructor === Human) {
      throw new Error("Can't instantiate abstract class!");
    }
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}`);
  }

  work() {
    console.log(`${this.constructor.name} is working`);
  }
}

// Public Server Module/Helper
const PublicServer = (Base) =>
  class extends Base {
    save() {
      console.log('SFX: Thank you!');
    }
  };

// Military Module/Helper
const Military = (Base) =>
  class extends Base {
    shoot() {
      console.log('DOR!');
    }
  };

class Doctor extends PublicServer(Human) {
  constructor(props) {
    super(props);
  }

  work() {
    super.work(); // From Human Class
    super.save(); // From PublicServer Class
  }
}

class Police extends PublicServer(Military(Human)) {
  static workplace = 'Police Station';

  constructor(props) {
    super(props);
    this.rank = props.rank;
  }

  shoot() {
    super.work(); // From Human Class
    super.shoot(); // From Military Class
    super.save(); // From PublicServer Class
  }
}

class Army extends PublicServer(Military(Human)) {
  static workplace = 'Army Station';

  constructor(props) {
    super(props);
    this.rank = props.rank;
  }

  shoot() {
    super.work(); // From Human Class
    super.shoot(); // From Military Class
    super.save(); // From PublicServer Class
  }
}

class Writer extends Human {
  work() {
    console.log(`Write books`);
    super.work(); // From Human Class
  }
}

/* Military Based */
const wiranto = new Police({
  name: 'Wiranto',
  address: 'Unknown',
  rank: 'General',
});

const prabowo = new Army({
  name: 'Prabowo',
  address: 'Undefined',
  rank: 'General',
});

/* Doctor */
const boyke = new Doctor({
  name: 'Boyke',
  address: 'Jakarta',
});

/* Writer */
const dee = new Writer({
  name: 'Dee',
  address: 'Bandung',
});

wiranto.shoot(); // Output: DOR!
prabowo.shoot(); // Output: DOR!
