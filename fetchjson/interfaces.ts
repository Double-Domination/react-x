interface IReportable{
  summary(): string;
}

const oldCharger= {
  name: 'charger',
  year: 1968,
  broken: false,
  summary(){
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


 printStats(oldViper);
// printStats(oldCharger);
// printStats(oldCharger);

// generate numbers array
