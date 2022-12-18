type Point = [number, number];

const p: Point = [5, 7];
const q: Point = [2, 3];

type User = Readonly<[number, string, string]>;
const user: User = [0, 'ynon', 'ynon@tocode'];


function distance(p: Point, q: Point) {}

function showEmail(user: User) {
  console.log(`The email is ${user[2].toLowerCase()}`);  
}

user.splice(1, 5);
console.log(user);
showEmail(user);

distance(p, q);
