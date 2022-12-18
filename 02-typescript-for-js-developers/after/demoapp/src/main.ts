import './style.css';
import { myTwice } from './utils';

console.log('hello world');

console.log(myTwice(10));
console.log(myTwice('asd'));

const p = document.querySelectorAll('p');

p.forEach(el => el.textContent = 'world');

