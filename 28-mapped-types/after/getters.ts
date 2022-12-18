interface Info {
  name: string;
  age: number;
}

type LazyInfo = Getters<Info>;


type Getters<T> = {
  [Key in keyof T as Key extends string ? `get${Capitalize<Key>}` : never]: () => T[Key]
}
