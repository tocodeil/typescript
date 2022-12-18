import './style.css'
import axios from 'axios';
import _ from 'lodash';

async function main() {
  const d = await axios.get('https://swapi.dev/api/people/1');
  console.log(d.data);
}

console.log(_.random(1, 10));

main();
