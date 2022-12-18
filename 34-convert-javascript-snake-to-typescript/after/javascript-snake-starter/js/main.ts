import SnakeBoard from './board';
import SnakeView from './snake-view';

const x: number = 10;
console.log(x);

$( () => {
  const rootEl = $('.board');
  const game = new SnakeBoard();
  new SnakeView(game, rootEl);
});
