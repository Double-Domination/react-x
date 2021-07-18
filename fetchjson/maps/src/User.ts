import faker from 'faker';

export const redIsFast = 'fas';

class User {
  name: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}

// const syu = faker.name.findName();
const fakeAddressLatitude = faker.address.latitude();

// const metilen = new User();
// console.log(fakeAddressLatitude);
