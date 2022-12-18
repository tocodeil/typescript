# TypeScript for Node.JS Developers

[ ] Create a new node project

[ ] Setup ts-node for development

[ ] Setup tsc for production
  - Use compilerOptions.outDir to write the JS files to a different destination


## Demo Code

Install

```
npm init -y
npm install --save-dev typescript ts-node @types/node
npm install --save-dev @tsconfig/node16
```

tsconfig.json

```
{
    "extends": "@tsconfig/node16/tsconfig.json"
}
```

main.ts

```
function sayHi(name: string) {
  console.log(`Hello ${name}`);
}

sayHi('ynon');
```
