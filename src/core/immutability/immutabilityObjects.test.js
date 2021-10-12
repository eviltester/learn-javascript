describe("By default objects are mutable", ()=>{

    test('we can add properties', () => {

        const anObject = {};
        anObject.a = 1;

        expect(anObject.a).toBe(1);
    });

    test('we can amend property values', () => {

        const anObject = {a:1};
        anObject.a = 2;

        expect(anObject.a).toBe(2);
    });
});


describe("We can make objects immutable with freeze and seal",()=>{

    test('we can freeze objects to prevent adding or amending properties', () => {

        const anObject = {b:2};

        Object.freeze(anObject);

        anObject.a = 1;
        anObject.b = 3;

        expect(anObject.a).toBe(undefined);
        expect(anObject.b).toBe(2);
    });

    test('freezing does not apply recursively for nested objects', () => {

        const anObject = {b:{}};

        Object.freeze(anObject);

        expect(anObject.b.value).toBe(undefined);

        anObject.a = 1;
        anObject.b.value=1;

        expect(anObject.a).toBe(undefined);
        expect(anObject.b.value).toBe(1);
    });

    test('we can seal objects to prevent adding properties, but allow amending property values', () => {

        const anObject = {b:2};

        Object.seal(anObject);

        anObject.a = 1;
        anObject.b = 3;

        expect(anObject.a).toBe(undefined);
        expect(anObject.b).toBe(3);
    });

});
