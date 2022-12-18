# Type Guards

[ ] Difference between run-time and compile-time knowledge

function foo(x: number) {}

const x = Math.random() > 0.5 ? 'a' : 10;
if (typeof x === 'number') {
  // TypeScript KNOWS that x is of type number
  // At compile time
}

if ('email' in user ) { .... }

[ ] Hello Type Guards
  - JavaScript commands that TypeScript uses to understand types

[ ] Built-In Type Guards
  - typeof
  - in
  - instanceof
  - != null

[ ] Assertions Syntax

