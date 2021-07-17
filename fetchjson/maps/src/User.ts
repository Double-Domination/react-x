import faker from 'faker';


class User {
  name: string;

  location: {
    lat: number;
    lng: number;
  };
}

const syu = faker.name.findName();

console.log(syu);
