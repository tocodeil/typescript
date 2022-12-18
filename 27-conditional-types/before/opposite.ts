function printIt(x: any, y: any) { }

// Compiles:
printIt(10, 'a');
printIt('b', 20);

// Won't Compile:
printIt(10, 10);
printIt('a', 'b');

