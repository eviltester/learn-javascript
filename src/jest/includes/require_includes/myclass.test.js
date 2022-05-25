/*
    CommonJS (CJS) format for including files is supported by Node.js by default.S
*/
const {MyClass} = require ('./myClass.js');

describe('use a class', ()=>{
    test('myclass', () => {
        var myObject = new MyClass();
    });
})