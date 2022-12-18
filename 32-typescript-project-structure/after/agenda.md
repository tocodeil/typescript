# Create A New TypeScript Project

1. Run:

```
npx tsc --init
```

2. Build with:

```
npx tsc
```

3. Create a simple `main.ts` file, and compile again

4. Add a `utils.ts` file, compile both

5. Modify some tsconfig settings
  - Use `include` to select which files to work on (Example: compile only files in `src` folder)
  - Use `compilerOptions.outDir` to build the project into a `dist` folder
  - Use `target` and `module` to select target platform and module loading style


