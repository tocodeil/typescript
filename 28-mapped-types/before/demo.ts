// 1 - Change type of values:
interface IGotStrings {
  a: string;
  b: string;
  c: string;
  d: string;
}

type IGotNumbers = {
  a: number,
  b: number,
  c: number,
  d: number,
}



// 2 - Use only the values of type string
interface IGotStringsAndBooleans {
  a: string;
  b: boolean;
  c: string;
  d: boolean;
}

type OnlyStrings = {
  a: string,
  c: string,
}
