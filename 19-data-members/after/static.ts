class Critter {
  static CrittersCount = 0;

  constructor() {
      Critter.CrittersCount++;
      console.log('A critter is born');
    }
  }

const c1 = new Critter();
const c2 = new Critter();

console.log(`${Critter.CrittersCount} were born since we started the program`);
