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

type FirstLetter<Word extends string> = Word extends `${infer F}${infer R}` ? F : never;

type Letter<Word extends string, Result extends Array<string>=[]> = 
  Word extends `${infer F}${infer R}` ? Letter<R, [...Result, F]> : Result[number];
