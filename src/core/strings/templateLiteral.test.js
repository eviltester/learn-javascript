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