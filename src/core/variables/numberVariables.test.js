describe('number variables',()=>{

    test('numbers can be represented as HEX with 0x', () => {
        const fifteen=0xF;
        expect(fifteen).toBe(15);
    });


    test('convert number variables to BINARY using .toString(2)', () => {
        const two=2;
        expect(two.toString(2)).toBe("10");
    });

    test('convert number variables to HEX using .toString(16)', () => {
        const two=15;
        expect(two.toString(16)).toBe("f");
    });


});