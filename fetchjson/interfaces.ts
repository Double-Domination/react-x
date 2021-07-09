interface IReportable {
  summary(): string;
}

const oldCharger = {
  name: 'charger',
  year: 1968,
  broken: false,
  summary() {
    return `Veh =>${this.name.toUpperCase()}`;
  },
};

const oldViper = {
  name: 'viper',
  year: 2000,
  broken: false,
  summary() {
    return `Vehicle =>${this.name.toUpperCase()}`;
  },
};

const printStats = (item: IReportable): void => {
  console.log(item.summary());
};

//ghp

//  printStats(oldViper);
// printStats(oldCharger);
// printStats(oldCharger);

// generate numbers array

class Vehicle {
  public drive(): void {
    console.log(' keep on rolling');
  }

  public lockTarget(): void {
    console.log('target locked!');
  }

  public jumpstart(): void {
    console.log('Now wedrive fastaa!!');
  }
}

const vehicle = new Vehicle();

//vehicle.drive();
// vehicle.lockTarget();

class Tank extends Vehicle {
  //@override
  public drive() {
    console.log('Tam ta da dam!');
  }
  public fireMainWeapon(): void {
    console.log('Caboom baby!1;');
  }
  public reloadMainWeapon(): void {
    console.log('Reload sequence initiated!');
  }
  /**
   * engageTheEnemy:void
   */
  public engageTheEnemy(): void {
    this.drive();
    this.lockTarget();
    this.fireMainWeapon();
  }
}

const rhino = new Tank();

//rhino.fireMainWeapon();
//rhino.jumpstart();
rhino.engageTheEnemy();
