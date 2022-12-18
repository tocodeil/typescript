# Add TypeScript to existing Webpack Project

- [ ] Install TypeScript and webpack ts-loader:

```
npm install --save typescript ts-loader
```

- [ ] Create a tsconfig.json file with:

```
npx tsc --init
```

- [ ] Fix webpack.config.js settings file:

```
const path = require('path');

module.exports = {
  context: __dirname,
  mode: "production",
  entry: "./js/main.js",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.join(process.cwd(), 'js'),
    publicPath: "/js/",
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
      publicPath: '/',
    },
  },
};
```

- [ ] Convert main.js to main.ts
  - Install jquery types settings @types/jquery
  - Modify the main file name in webpack.config.js  to main.ts

- [ ] Add Source Maps
  - In tsconfig.json, add "sourceMap": true
  - In webpack.config.js add the line devtool: 'inline-source-map'


