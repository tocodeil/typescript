// type alias
type Person = { name: string, age: number };

function printName(person: Person) {
  console.log(person.name);
}


function numericMap(items: Array<number>, fn: (x: number) => number): Array<number> {
  const arr: Array<number> = [];

  items.forEach(i => {
    arr.push(fn(i));
  })

  return arr;
}


/**
 [ ] Numbers

[ ] Strings

[ ] Booleans

[ ] Arrays

[ ] Functions

[ ] Objects
  - with known keys
  - with unknown keys (records)

 */


