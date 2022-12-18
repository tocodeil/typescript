class Car {
  speed: number = 0;

  faster() {
      this.speed += 10;
  }

  slower() {
      this.speed -= 10;
  }

  stop() {
      this.speed = 0;
  }
}

interface MovingThing {
  speed: number;
}

function fastest(...things: Array<MovingThing>) {
  return things.reduce((a, b) => a.speed > b.speed ? a : b);
}

const c1 = new Car();
const c2 = new Car();
console.log(fastest(c1, c2));








