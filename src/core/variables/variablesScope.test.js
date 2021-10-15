test('let is block scoped', ()=>{

    let outside = 1;

    {
        let inside=2;
        expect(outside).toBe(1);
        expect(inside).toBe(2);
    }

    expect(outside).toBe(1);
    try{
        // inside only exists inside the block
        inside==outside;
    }catch(err){
        expect(err.name).toBe('ReferenceError');
        expect(err.message).toBe('inside is not defined');
    }
    
});

test('const is block scoped', ()=>{

    const outside = 1;

    {
        const inside=2;
        expect(outside).toBe(1);
        expect(inside).toBe(2);
    }

    expect(outside).toBe(1);
    try{
        // inside only exists inside the block
        inside==outside;
    }catch(err){
        expect(err.name).toBe('ReferenceError');
        expect(err.message).toBe('inside is not defined');
    }
    
});

test('can create new variables of same name as one outside block', ()=>{

    let outsideLet = 1;
    const outsideConst = 2;

    {
        let outsideLet=3;
        const outsideConst = 4;
        expect(outsideLet).toBe(3);
        expect(outsideConst).toBe(4);
    }

    expect(outsideLet).toBe(1);
    expect(outsideConst).toBe(2);
});


test('instantiated but not declared variables are var', ()=>{

    // acts like
    // var outside=1;
    outside = 1;

    {
        outside=2;
        expect(outside).toBe(2);
    }

    expect(outside).toBe(2);
 });