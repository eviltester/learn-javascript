/*
ES6 Module import and export are not supported by default with Node.js and Jest

We need to add new dependencies to our project to handle this.

The Jest docs for using with babel:

https://jestjs.io/docs/getting-started#using-babel

Suggest:

```shell
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Then create `babel.config.js` in your root folder:

```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

This will install the babel compiler to compile down to CommonJS for Node.js

And... also means you may need to tighten up your code so that all
variables are defined and resolve an other minor issues, essentially
forces you to become a better programmer.

To make this project work, I made most of the files 'script' which means
they don't have `use strict`, because some of my tests demonstrate `bad practises` for
some concepts. The configuration is all contained in `babel.config.js` in the root of the project.

*/
import {MyClass} from './myClass.js';

describe('use a class', ()=>{
    test('myclass', () => {
        var myObject = new MyClass();
    });
})