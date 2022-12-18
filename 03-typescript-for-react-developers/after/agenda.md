# TypeScript for React Developers

[x] Create a new React/TypeScript project
  npx create-react-app --template typescript

[x] Type Validation on State
  useState(0) => state is number
  useState('wow') => state is string
  useState<number|string>(0);

[x] Type Validation and Auto Complete on Props
  function Count({ initialValue = 0 }) { }
  function Count({ ... }: {
    initialValue?: number,
    labelText: string,
  })

