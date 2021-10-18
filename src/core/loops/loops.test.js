describe('for loops allow us to iterate a specific amount of times',()=>{

    test('for loop has an initializer (x=1), condition (<100) and iterator (x++)', () => {
        
        var counter=1;
        for(var x=1; x<100; x++){
            counter++;
        }
        console.log(`loop was called ${counter} times`);

        expect(counter).toBe(100)
    });

    test('we can break out of a for loop early', () => {
        
        var counter=1;
        for(var x=1; x<100; x++){            
            if(x===50){break;}
            counter++;            
        }
        console.log(`loop was called ${counter} times`);

        expect(counter).toBe(50)
    });

});