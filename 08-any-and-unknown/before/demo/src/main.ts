
// Fix the error so we can use this function
function stupidOldFunction() {
  if (Math.random() > 0.8) {
    return 10;
  } else if (Math.random() > 0.6) {
    return [2, 'a', 'c'];
  } else return stupidOldFunction();
}

const x = stupidOldFunction();
console.log(x + 10);





