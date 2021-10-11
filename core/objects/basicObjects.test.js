test('an empty object can be created using braces', () => {

    // this is called the 'literal' or 'initialization' notation
    
    var anObject={};

    expect(typeof anObject).toBe("object");
});

test('an object can have properties', () => {

    var anObject={a:2};

    expect(anObject.a).toBe(2);
});

test('properties can be accessed with an index notation', () => {

    var anObject={a:2};

    expect(anObject["a"]).toBe(2);
});

test('when a property does not exist, it is undefined', () => {

    var anObject={};

    expect(anObject.a).toBe(undefined);
});

test('properties can be added to objects after creation', () => {

    const anObject = {};

    anObject.a = 1;
    anObject["b"] = 2;

    expect(anObject.a).toBe(1);
    expect(anObject["a"]).toBe(1);

    expect(anObject.b).toBe(2);
    expect(anObject["b"]).toBe(2);
});

test('objects can be created using shorthand notation', () => {

    const a=1, b=2, c=3;
    const anObject = {a, b, c};

    expect(anObject.a).toBe(1);
    expect(anObject.b).toBe(2);
    expect(anObject.c).toBe(3);

    // this might be easier than 'key: value'
    const anotherObject = {a: a, b: b, c: c};

    expect(anotherObject.a).toBe(1);
    expect(anotherObject.b).toBe(2);
    expect(anotherObject.c).toBe(3);

});

test('objects can be created in different ways', () => {

    const aNewObject= new Object();
    const aLiteralObject = {};

    expect(typeof aNewObject).toBe("object");
    expect(typeof aLiteralObject).toBe("object");
});


test('Object.create requires a prototype', () => {

    const aPrototype = {a:1};
    const aCreatedObject = Object.create(aPrototype);

    expect(typeof aCreatedObject).toBe("object");
    expect(aCreatedObject.a).toBe(1);
});



/*

Reference:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

*/