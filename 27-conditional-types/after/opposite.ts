
function printIt<T extends string|number>(x: T, y: T extends number ? string : number) { }

// Compiles:
printIt(10, 'a');
printIt('b', 20);

// Won't Compile:
printIt(10, 10);
printIt('a', 'b');

printIt(false, 10);
