// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


test('a template literal is a template to create a string', () => {

    /*
        A template literal uses back ticks
    */
    const aVariable = "Bob";
    const aString=`Hello ${aVariable}`;

    expect(aString).toBe("Hello Bob");
});

test('template literals help avoid string concatenation', () => {

    const name1 = "Bob";
    const name2 = "Eris"
    const aString=`Hello ${name1} and ${name2}`;
    const concatenatedString = 'Hello ' + name1 + " and " + name2;

    // aString and concatenatedString are equivalent
    expect(aString).toBe("Hello Bob and Eris");
    expect(concatenatedString).toBe(aString);
});

test('a template literal can perform calculations', () => {

    const number1 = 1;
    const number2 = 2;
    const aString=`1+2=${number1+number2}`;

    expect(aString).toBe("1+2=3");
});

test('a template literal can call functions', () => {

    const bob = ()=>{return "Bob"};
    const aString=`Hello ${bob()}`;

    expect(aString).toBe("Hello Bob");
});

test('a template literal can span lines', () => {

    const multiLineText =`
    line1
    line2
    `    
    expect(multiLineText).toBe("\n    line1\n    line2\n    ");
});