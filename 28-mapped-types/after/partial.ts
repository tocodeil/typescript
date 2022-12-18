type User = {
  id: number;
  name: string;
  age: number;
};

type PartialUser = MyPartial<User>;


type MyPartial<T> = {
  [Key in keyof T]+?: T[Key];
}

