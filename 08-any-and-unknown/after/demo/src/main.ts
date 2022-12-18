function twice(x: number) {
  return x + x;
}

console.log(twice(10));

// @ts-ignore
console.log(twice("wow"));


// Fix the error so we can use this function
function stupidOldFunction(): unknown {
  if (Math.random() > 0.8) {
    return 10;
  } else if (Math.random() > 0.6) {
    return [2, 'a', 'c'];
  } else return stupidOldFunction();
}

const x = stupidOldFunction();

// @ts-ignore
console.log(x + 10);

if (typeof x === 'number') {
  console.log(x + 10);
} else {
  console.log(String(x) + '10');
}


