type Point = {
  x: number,
  y: number,
};

function createRandomPoint(): Point {
  const p: Record<string, any> = {};
  
  ['x', 'y'].forEach(key => {
    p[key] = Math.random() * 100;
  })

  return p as Point;
}

let x = (Math.random() < 1 ? 1 : null)!;
console.log(x + 5);

