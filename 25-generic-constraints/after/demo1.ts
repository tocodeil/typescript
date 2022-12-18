// T can be anything that has a length
// T extends { length: number };
function longerThan<T extends { length: number }>(n: number, ...items: Array<T>) {
    return items.filter(s => s.length > n);
}

console.log(longerThan(4, [1, 2], [2, 3, 4, 5, 6], [10, 20, 30, 40, 50]));

console.log(longerThan(4, 'a', 'b', 'wow it works', 'yay'));


// T was a string
const longerStrings = longerThan(4, 'a', 'b', 'wow it works', 'yay');

// typeof longerString[0] === 'string';
longerStrings[0].toLowerCase();