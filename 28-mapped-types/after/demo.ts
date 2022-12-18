// 1 - Change type of values:
interface IGotStrings {
  a: string;
  b: string;
  c: string;
  d: string;
}

type ConvertAllToNumbers<T> = {
  [Key in keyof T]: number;
}

type IGotNumbers = ConvertAllToNumbers<IGotStrings>;

// 2 - Use only the values of type string
interface IGotStringsAndBooleans {
  a: string;
  b: boolean;
  c: string;
  d: boolean;
}

type OnlyStrings<T> = {
  [Key in keyof T as T[Key] extends string ? Key : never]: number;
}

type OnlyStrings1 = OnlyStrings<IGotStringsAndBooleans>;

