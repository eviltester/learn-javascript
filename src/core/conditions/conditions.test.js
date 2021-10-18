describe('Conditional statements allow us to make decisions',()=>{

    test('if is the most basic conditional statement e.g. if(a condition is met){ do something}', () => {

        const a=1;
        var b=0;

        if(a===1){
            b=2;
        }

        expect(b).toBe(2);

    });

    test('else if condition is not met', () => {

        const a=2;
        var b=0;

        if(a===1){
            b=2;
        }else{
            b=4;
        }

        expect(b).toBe(4);
    });

});    