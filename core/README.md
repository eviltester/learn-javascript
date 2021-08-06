# Core Javascript


## Using This project

Assuming you have node installed.

```
npm install
```

To run the tests either use:

```
npm test
```

Or if you want better output:

```
npm run testv
```

An alias for `npm run test -- --verbose`

Then read through the code, try changing stuff to make sure you understand it.

## Starting From Scratch

This project was created using:

```
mkdir core
cd core
npm init
```

To create a default package.json

Then add the testing library [JEST](https://jestjs.io/docs/getting-started)

```
npm install -D jest
```

`-D` means install for development, shorthand for `--save-dev`

This will add the jest dependency into `package.json`

e.g.

```
  "devDependencies": {
    "jest": "^27.0.6"
  }
```

Then update `package.json` to use jest to run tests by adding

```
  "scripts": {
    "test": "jest"
  }
```

e.g.

```
...
  "devDependencies": {
    "jest": "^27.0.6"
  },
  "scripts": {
    "test": "jest"
  }
}
```

Running `npm run test` will fail at this point because there are no tests.

Create a file `myfirst.test.js`

With the contents:

```
test('jest can run', () => {
    expect(true).toBe(true);
  });
```

And jest will run the test, reporting the tests passing.

Setup to start using Jest and Node.js, ready to learn JavaScript.

## Tests

This is the basic template for a `test`

```
test('name', ()=> {
    
});  
```

## Readable Test Run

```
npm test -- --verbose
```

Amend `package.json`

```
"testv": "jest --verbose"
```

then I can run

```
npm run testv
```
