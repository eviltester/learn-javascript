describe('String is an object with many methods',()=>{

    test('charAt gets the character at a specific index in the string', () => {

        const aString = "abc";

        expect(aString.charAt(0)).toBe("a");
        // out of bounds returns ""
        expect(aString.charAt(4)).toBe("");
    });

    test('a string can be created using \'\' or ""', () => {

        const aString = "abc";
        const bString = 'def';

        expect(aString).toBe("abc");
        expect(bString).toBe("def");
    });
});

describe('substr gets a subset of the string',()=>{

    test('substr(x,y) from x to y)', () => {

        const aString = "abcdef";

        expect(aString.substr(1,2)).toBe("bc");        
    });

    test('substr(-ve, y) from the end of the string for y chars', () => {

        const aString = "abcdef";

        expect(aString.substr(-4,2)).toBe("cd");        
    });

    test('substr(out of bounds,y) returns ""', () => {

        const aString = "abcdef";

        expect(aString.substr(6,2)).toBe("");
    });

    test('substr(-ve out of bounds,y) from 0 to y)', () => {

        const aString = "abcdef";

        expect(aString.substr(-8,2)).toBe("ab");
    });

    test('substr(x) goes from x to the end of the string', () => {

        const aString = "abcdef";

        expect(aString.substr(2)).toBe("cdef");
        expect(aString.substr(6)).toBe("");
        expect(aString.substr(8)).toBe("");
        expect(aString.substr(-2)).toBe("ef");
    });
});

describe('parseInt is a built in function to convert strings to integers',()=>{

    test('parseInt(x) returns the integer value of the string', () => {
        expect(parseInt("2")).toBe(2);
    });

    test('parseInt(x) ignores whitespace', () => {
        expect(parseInt("   2  ")).toBe(2);
    });

    test('parseInt(x) can convert negatives', () => {
        expect(parseInt("   -2  ")).toBe(-2);
    });

    test('returns NaN (Not a Number) if it cannot convert', () => {
        expect(parseInt("-")).toBe(NaN);
    });
});
