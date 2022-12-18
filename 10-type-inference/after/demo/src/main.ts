import './style.css'

/**
 * TypeScript Type Inference
 * 
 * [x] Inferencing simple types (const vs. let)
 * [x] Inferencing array access
 * [x] Inferencing object access
 * [x] Inferencing unions
 * [x] Inferencing function parameters
 */

function foo(n: number) { }

const x = 10;
let y = 20;

const arr = [10, 20, 30, 40];
const z = arr[0];

const o = { foo: 10, bar: 20 };
o.foo = 50;
const zz = o.foo;

const brr = [10, 20, 'hi', 'bye'];
const r = brr[0]

const fn = (x: number) => x * 2;

arr.map(x => x * 2);








