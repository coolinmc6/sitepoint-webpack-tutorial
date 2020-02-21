[Back to Front End Dev: Webpack](https://github.com/coolinmc6/front-end-dev/blob/master/webpack.md)

# A Beginner’s Guide to Webpack 4 and Module Bundling

Source: [Sitepoint](https://www.sitepoint.com/beginners-guide-webpack-module-bundling/)

## Notes

- `--mode development` optimizes for build speed and debugging
- `--mode production` optimizes for execution speed at runtime and output file size

```js
import { groupBy } from 'lodash-es';
import people from './people'
```

- **Note:** Imports without a relative path like `'es-lodash'` are modules from npm
installed to `/node_modules`. Your *own modules* will always need a relative path 
like `'./people'`, as this is how you can tell them apart.
- Notice that when we run `npm run develop` and use the development mode, the bundle
size as shown in the terminal is 1.41MB. That seems big but when we use the production
mode with `npm run build`, Webpack uses a technique called *tree-shaking* to remove
unused modules from lodash.
- Loaders let you run preprocessors on files as they're imported.
- Before I add Babel, here is my config file:

```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
- Here is how I installed the Babel and presets that I wanted:

```sh
npm install --save-dev "babel-loader@^8.0.0-beta" @babel/core @babel/preset-env
```
```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
```
```js
{
  "presets": [
    ["@babel/env", {
      "modules": false
    }]
  ],
  "plugins": ["@babel/syntax-dynamic-import"] // syntax-dynamic-import => in tutorial but didn't work for me
}
```
- This config prevents Babel from transpiling `import` and `export` statements into 
ES5, and enables dynamic imports.
- Loaders can also be chained together in a series of transforms. I have experience with
this with Sass and the style loader.
- After running:

```sh
npm install --save-dev style-loader css-loader sass-loader node-sass
```

- I update my webpack config:

```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      { // REVERSE ORDER
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, // #3- output CSS into style tag
          { loader: 'css-loader' }, // #2 - CSS into JS and resolve dependencies
          { loader: 'sass-loader' } // #1 - SCSS into CSS
        ]
      }
    ]
  }
}
```

- It is important to remember that the loaders are processed in **reverse order**. So
to use Sass, this is what happens: I write my `styles.scss` file which uses the `sass-loader`
to compile it to CSS, my `css-loader` to parse the CSS into JavaScript and resolve
dependencies, and the `style-loader` outputs CSS into a `<style>` tag in the document.
- Here is another way to look at it: `styleLoader(cssLoader(sassLoader("source")))`

