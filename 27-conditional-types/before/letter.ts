// compile
move('n', 10);
move('s', 12);

// doesn't compile
move('nn', 4);


// Solution:
//
// 1. Start with FirstLetter<"hello">
//
// 2. Then implement Letter<"hello">
//

function move(direction: Letter<'nswe'>, steps: number) {}

