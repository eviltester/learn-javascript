test('a test can be shown at a top level', () => {
    expect(true).toBe(true);
});

describe("We can embed tests within a describe",()=>{

    test('can create a hierarchy in reporting', () => {
        expect(true).toBe(true);
    });
});

describe("We can embed describes",()=>{
    describe("Within describe to organise well",()=>{
        test('single test in a describe', () => {
            expect(true).toBe(true);
        });
    });
    describe("Another nested describe",()=>{
        test('nested test1 in a describe', () => {
            expect(true).toBe(true);
        });
        test('nested test2 in a describe', () => {
            expect(true).toBe(true);
        });
    });
});

describe("Describes can be nested",()=>{
    describe("and nested",()=>{
        describe("and nested further",()=>{
            describe("and nested even further",()=>{
                test('use nesting to document tests effectively', () => {
                    expect(true).toBe(true);
                });
            });        
        });    
    });
});