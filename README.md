# React App Development Starter

> ## TL;DR 
> Not the tinkering kind, or just want to get into building stuff?
> ```
> npm install -g create-react-app
> create-react-app hello-world
> cd hello-world
> npm start
> ```
> For more, see [React installation instructions](https://facebook.github.io/react/docs/installation.html).

A minimal react app project setup with the following dependencies:
* express
* express-handlebars
* react
* react-dom

And the following development dependencies:
* babel-cli
* babel-core
* babel-eslint
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-0
* eslint
* eslint-plugin-react

Also requires webpack, globally installed.

> ## NB
> This was done on Windows. If you plan to make use of this with [Bash unix shell](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29),
> in `package.json`, you would want to change the `clean` script to something like:
> ```
> "clean": "rm -rf build && mkdir build",
> ```

Inspirations / references for this setup:
1. [How to Use ES6 for Universal JavaScript Apps](https://medium.com/javascript-scene/how-to-use-es6-for-isomorphic-javascript-apps-2a9c3abe5ea2#.ji17ytoqr) by [Eric Elliott](https://github.com/ericelliott)
2. [Baby’s First Reaction](https://medium.com/javascript-scene/baby-s-first-reaction-2103348eccdd#.720sf8ah4) by [Eric Elliott](https://github.com/ericelliott)
3. [Browserify vs Webpack](https://medium.com/@housecor/browserify-vs-webpack-b3d7ca08a0a9#.lirbr55oc) by [Cory House](https://medium.com/@housecor)
4. [webpack-howto](https://github.com/petehunt/webpack-howto) by [Pete Hunt](https://github.com/petehunt)
5. [CLI](http://webpack.github.io/docs/cli.html) from [webpack](http://webpack.github.io/)'s documentation
