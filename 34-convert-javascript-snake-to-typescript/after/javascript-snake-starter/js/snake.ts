import Board, { Coords } from './board';

export default class Snake {
  board: Board;
  segments: Array<Coords>;
  direction: 'N'|'S'|'E'|'W';
  growth: number;
  static GROWTH_RATE = 3;

  constructor(board: Board) {
    this.board = board;
    this.segments = [[10, 10]];
    this.direction = "N";
    this.growth = 0;
  }

  nextCoord(): Coords {
    let currentHead = this.segments[0];

    switch(this.direction) {
      case 'N': return ([currentHead[0] - 1, currentHead[1]]);
      case 'E': return ([currentHead[0], currentHead[1] + 1]);
      case 'S': return ([currentHead[0] + 1, currentHead[1]]);
      case 'W': return ([currentHead[0], currentHead[1] - 1]);
    }
  }

  move() {
    let nextMove = this.nextCoord();
    if (this.board.isValid(nextMove)) {
      this.segments.unshift(this.nextCoord());
      this.checkEating();

      if (this.growth === 0) {
        this.segments.pop();
      } else {
        this.growth -= 1;
      }

      return true;
    }
    return false;
  }

  checkEating() {
    let apple = this.board.apple;
    let head = this.segments[0];
    if (head[0] === apple[0] && head[1] === apple[1]) {
      this.board.apple = this.board.setApple();
      this.growth += Snake.GROWTH_RATE;
    }
  }
}


