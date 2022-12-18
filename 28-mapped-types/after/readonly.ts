export {};

type User = {
  id: number;
  name: string;
  age: number;
};

type ReadonlyUser = MyReadonly<User>;

type MyReadonly<T> = {
  +readonly [Key in keyof T]: T[Key];
}
