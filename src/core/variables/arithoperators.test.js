describe('JavaScript has operators we can use for arithmetic',()=>{

    test('plus +, minus -, divide / and times *', () => {

        const x=6;
        const y=2;

        expect(x + y).toBe(8);
        expect(x - y).toBe(4);
        expect(x / y).toBe(3);
        expect(x * y).toBe(12);
    });

    test('modulus % returns the remainder', () => {

        const x=6;
        const y=2;
        const z=5;

        expect(x % y).toBe(0);
        expect(z % y).toBe(1);
    });

    test('++ to increment by 1', () => {

        var x=1;
        x++;

        expect(x).toBe(2);
    });

    test('-- to increment by 1', () => {

        var x=4;
        x--;

        expect(x).toBe(3);
    });

    test('+= to increment by specific value e.g. x+=2', () => {

        var x=4;
        x+=2;

        expect(x).toBe(6);
    });

    test('-= to decrement by specific value e.g. x-=2', () => {

        var x=4;
        x-=2;

        expect(x).toBe(2);
    });

    test('*= to multiply by specific value e.g. x*=2', () => {

        var x=4;
        x*=2;

        expect(x).toBe(8);
    });

    test('/= to divide by specific value e.g. x/=2', () => {

        var x=4;
        x/=2;

        expect(x).toBe(2);
    });

    test('%= to modulo by specific value e.g. x%=2', () => {

        var x=5;
        x%=2;

        expect(x).toBe(1);
    });
});

describe('Increment and Decrement nuances',()=>{

    test('x++ returns x then increments', () => {

        var x=2;
        var y=x++;

        expect(y).toBe(2);
        expect(x).toBe(3);
    });

    test('++x increments x then returns x', () => {

        var x=2;
        var y=++x;

        expect(y).toBe(3);
        expect(x).toBe(3);
    });

    test('same for --x, and x--', () => {

        var x=2;        
        var y=--x;

        expect(y).toBe(1);
        expect(x).toBe(1);

        y=x++;

        expect(y).toBe(1);
        expect(x).toBe(2);
    });

});