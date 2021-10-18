describe('JavaScript has a Math object with many api methods',()=>{

    test('Math.random returns a random number between 0 and 1', () => {

        for(var x=0;x<100;x++){
            expect(Math.random()).toBeGreaterThan(0);
            expect(Math.random()).toBeLessThan(1);    
        }
    });

    test('Math.floor returns the largest integer less than or equal to a given number', () => {

        expect(Math.floor(5.6)).toBe(5);
        expect(Math.floor(3.9)).toBe(3);
        expect(Math.floor(0.1)).toBe(0);
    });


    test('to get an integer random number between a range use Math.floor and a multiplier', () => {

        function randomNumberUpTo(theVal){
            return Math.floor(Math.random() * theVal)
        }

        for(var x=0;x<100;x++){
            expect(randomNumberUpTo(10)).toBeGreaterThanOrEqual(0);
            expect(randomNumberUpTo(10)).toBeLessThan(10);
        }        
    });

});        