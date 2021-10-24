describe('Arrays have methods to help, learn these well',()=>{

    test('.length returns the size of the array', () => {

        const anArray=["a", "b", "c", "d"];

        expect(anArray.length).toBe(4);
    });

    test('.push adds items to the end of the array', () => {

        const anArray=["a", "b", "c"];
        anArray.push("d");

        expect(anArray.length).toBe(4);
        expect(anArray[3]).toBe("d");
    });

    test('.join(x) creates a string joining all the items with x', () => {

        const anArray=["a", "b", "c"];

        expect(anArray.join(",")).toBe("a,b,c");
        expect(anArray.join(", ")).toBe("a, b, c");
        expect(anArray.join(" and ")).toBe("a and b and c");
    });

});

describe('Setting full array values',()=>{



    test('An array can be created with undefined values', ()=>{

        const anArray = Array(5);

        expect(anArray.length).toBe(5);
        expect(anArray[0]).toBe(undefined);
        expect(anArray[4]).toBe(undefined);

    });

    test('An array can be created and .fill(ed) with values', ()=>{

        const anArray = Array(5).fill(1);
        expect(anArray.length).toBe(5);
        expect(anArray[0]).toBe(1);
        expect(anArray[4]).toBe(1);

    });

    test('Care needs to be taken when filling with objects, otherwise they are the same object', ()=>{

        const anArray = Array(5).fill({myNum: 1});

        expect(anArray.length).toBe(5);

        expect(anArray[0].myNum).toBe(1);
        expect(anArray[4].myNum).toBe(1);

        expect(anArray[0] === anArray[4]).toBe(true);

        anArray[0].myNum=5;
        expect(anArray[4].myNum).toBe(5);

    });


    test('Care needs to be taken when filling with objects, a new object is created once and added to the array', ()=>{

        function prototypeObject(x){
            this.myNum=x;
        }

        const anArray = Array(5).fill(new prototypeObject(1));

        expect(anArray.length).toBe(5);

        expect(anArray[0] === anArray[4]).toBe(true);

    });


    test('We can use .from to fill an array with new objects', ()=>{
        
        const anArray = Array.from(Array(5), () => {
            return {myNum: 1};
          });

        expect(anArray.length).toBe(5);

        expect(anArray[0].myNum).toBe(1);
        expect(anArray[4].myNum).toBe(1);

        expect(anArray[0] === anArray[4]).toBe(false);
    });


    test('We can not use .map on it\'s own to create filled arrays, because map ignores sparse undefined values', ()=>{
        
        const anArray = Array(5).map(() => {
            return { myNum: 1 };
          });

        expect(anArray.length).toBe(5);
        expect(anArray[0]).toBe(undefined);
        
    });

    test('Spread creates a full array of undefined values, which can be used with map and is equivalent to .from', ()=>{
        
        const anArray = [...Array(5)].map(() => {
            return { myNum: 1 };
          });

        expect(anArray.length).toBe(5);
        expect(anArray[0].myNum).toBe(1);
        
    });
});