let regularArmor: number = 2;

regularArmor = 3;

let protectionLavel: string = 'medium';

let hasJumpPack: boolean = true;

let nullFlag: null = null;


let nothing: undefined = undefined;

// standard objsects

let now: Date = new Date();

let chapters: string[] = [
  'sanamanders',
  'raven guard',
  'ultramarines',
];

chapters.shift()

// console.log(chapters);

let conditions: boolean[] = [true, false];

let quantities: number[] = [1, 2, 3, 4, 5];



class SpaceMarine {
}


let bprealeSM: SpaceMarine = new SpaceMarine;

let position: { x: number; y: number;} = {
  x: 10,
  y:30,
};

//function
const showNumber: (i: number) => void =
  (i: number) => {

  console.log(i);
  
  };

  //json


const coordinaresCurrent = '{"x":1, "y":20}';

const coordinatesParsed: { x: number; y: number;} = JSON.parse(coordinaresCurrent);

// console.log(coordinatesParsed);


coordinatesParsed.y = 4;

let possibleConditions = ['cyan', 'magneta', 'ultramarine'];

let foundCondition=false;

for (let i = 0; i < possibleConditions.length; i++) {
  if (possibleConditions[i]==='ultramarine') {
    foundCondition = true;
  }
}


let mechanismState = [-10, -1, 14];
let positveMechanismState;

let Favorite = false;

const huntingHighLow: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const filteredByDefinition: number[] = huntingHighLow.filter((x) => {
  if (x <= 5) {return x };
});

//console.log(filteredByDefinition);
const makeSomeNoise: (arguments: string) => string=
  (arguments) => {
    return arguments;
  };


const theNoise = makeSomeNoise('4');
//console.log(typeof theNoise);


const addendum = (x:number,y:number):string => {
  return (x + y).toString();
}


const summary = addendum(5, 4);

// console.log(summary);

//typed arrays
// object destructuring
//array destructuring
//multiple types
// new Tuples

const dish = {
  color: 'red',
  carbon: true,
  sugar: 4,
  
};

const cola: [string, boolean, number] = ['brown', true, 50];

type Drink = [string, boolean, number];

const vodka: Drink = ['vodka', false, 0];











