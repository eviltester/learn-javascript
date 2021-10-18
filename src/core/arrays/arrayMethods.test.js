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