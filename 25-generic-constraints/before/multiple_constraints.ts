export {};

function getFromObject(thing: Record<string, any>, key: string) {
    return thing[key];
}

getFromObject({ one: 10, two: 20 }, 'one');
getFromObject({ one: 10, two: 20 }, 'three');

