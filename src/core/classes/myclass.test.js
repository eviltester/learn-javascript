const {MyClass} = require ('./myClass.js');

describe('use a class', ()=>{
    test('myclass', () => {
        var myObject = new MyClass();
    });
})