// Generics
/*
Parameterized collection of signatures
id(number) => number
id(string) => string
id(Array<number>) => Array<number>
id({ name: string }) => { name: string };
*/

function id<T>(x: T) {
  return x;
}

const x = id(10);

console.log(x + 5);

const y = id('wow');
console.log(y.toLowerCase());

id([10, 20, 30])[0];

type Pair<T> = {
  x: T,
  y: T,
}

function isEqual<T>(p: Pair<T>) {
  return p.x === p.y;
}

isEqual({ x: 10, y: 20 });
isEqual({ x: 10, y: 'hello' });