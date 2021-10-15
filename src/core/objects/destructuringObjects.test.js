test('we can pull fields out of objects by destructuring', () => {

    const anObject={a:1, b:2, c:3, d:4};
    const {a, b} = anObject;

    expect(a).toBe(1);
    expect(b).toBe(2);
});

test('the destructured data is not part of the object', () => {

    const anObject={a:1, b:2, c:3, d:4};
    let {a, b} = anObject;
    a=42;

    expect(a).toBe(42);
    expect(anObject.a).toBe(1);
});

test('we can rename during destructuring', () => {

    const anObject={a:1, b:2, c:3, d:4};
    const {a : bob, b: dobbs} = anObject;

    expect(bob).toBe(1);
    expect(dobbs).toBe(2);
});

test('destructuring can happen during a function call in the parameter declaration', () => {

    const anObject={a:1, b:2, c:3, d:4};

    function aPlusD({a,d}){
        return a+d;
    }

    expect(aPlusD(anObject)).toBe(5);
});