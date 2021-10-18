describe('Arrays are fundamental data structure that it is important to know well',()=>{

    test('an array contains values zero indexed by position', () => {

        const anArray=["a", "b", "c", "d"];

        expect(anArray[0]).toBe("a");
        expect(anArray[3]).toBe("d");
    });

    test('accessing a position in the array with no value returns undefined', () => {

        const anArray=["a", "b", "c", "d"];

        expect(anArray[3]).toBe("d");
        expect(anArray[4]).toBe(undefined);
    });

    test('an array is an object with methods like length', () => {

        const anArray=["a", "b", "c", "d"];

        expect(anArray.length).toBe(4);
    });

    test('the last item in an array is at position length-1', () => {

        const anArray=["a", "b", "c", "d"];

        expect(anArray[anArray.length-1]).toBe("d");
    });

    test('an array can contain mixed types', () => {

        const anArray=[1, "two", {value: "three"}, 4];

        expect(anArray[0]).toBe(1);
        expect(anArray[1]).toBe("two");
        expect(anArray[2].value).toBe("three");
    });

    test('we can add new items to an array with .push', () => {

        const anArray=["a", "b", "c"];
        anArray.push("d");

        expect(anArray.length).toBe(4);
        expect(anArray[3]).toBe("d");
    });

    test('we could add with an index', () => {

        const anArray=["a", "b", "c"];
        anArray[3]="d";

        expect(anArray.length).toBe(4);
        expect(anArray[3]).toBe("d");
    });

    test('we could add with an index, but we might get the indexing wrong and miss items', () => {

        const anArray=["a", "b", "c"];
        anArray[4]="d"

        expect(anArray.length).toBe(5);
        expect(anArray[3]).toBe(undefined);
        expect(anArray[4]).toBe("d");
    });

    test('an array can be "key" indexed', () => {

        const anArray=[];
        anArray["aKey"]="Bob";
        anArray["anotherKey"]="Dobbs";

        expect(anArray["aKey"]).toBe("Bob");
        expect(anArray["anotherKey"]).toBe("Dobbs");
    });
});