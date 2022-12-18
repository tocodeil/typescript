// force key to be a valid key of thing
function getFromObject<T extends Record<string, any>>(
    thing: T,
    key: keyof T,
) {
    return thing[key];
}

console.log(getFromObject({ one: 10, two: 20 }, 'one'));

// console.log(getFromObject({ one: 10, two: 20 }, 'three'));

