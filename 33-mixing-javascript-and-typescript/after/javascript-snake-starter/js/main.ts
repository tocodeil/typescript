const SnakeBoard = require('./board.js');
const SnakeView = require('./snake-view.js');

const x: number = 10;
console.log(x);

$( () => {
  const rootEl = $('.board');
  const game = new SnakeBoard();
  new SnakeView(game, rootEl);
});
