type Person = typeof people[number]

const people = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
] as const;

function sayHi(person: Person) {
    console.log(`${person.name} says hi`);
}

sayHi({ name: "Bob", age: 23 });