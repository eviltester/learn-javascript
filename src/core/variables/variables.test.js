test('var creates a variable that can be changed', () => {

    var a=true;

    expect(a).toBe(true);

    a=false;

    expect(a).toBe(false);
});

test('variables can be created through assignment', ()=> {

    // create variable by default
    a=true;

    expect(a).toBe(true);

    a=false;

    expect(a).toBe(false);
});


test('variables can be declared without an assigned (defined) value', ()=> {

    var a;
    expect(a).toBeUndefined();
    expect(typeof a).toBe('undefined');

    a=1;
    expect(a).toBe(1);

});

test('accessing variables that do not exist creates an error', ()=> {

    var b=2;
    // have not declared a variable called 'a'

    try{
        // inside only exists inside the block
        a==b;
    }catch(err){
        expect(err.name).toBe('ReferenceError');
        expect(err.message).toBe('a is not defined');
    }

});

test('let creates a variable that can be changed', () => {

    // difference between let and var is the scope

    let a=true;

    expect(a).toBe(true);

    a=false;

    expect(a).toBe(false);
});

test('const creates a variable that can NOT be changed', () => {

    const a=true;

    expect(a).toBe(true);

    try{
        a=false;
    }catch(err){
        expect(a).toBe(true);
        expect(err.name).toBe('TypeError')
        expect(err.message).toBe('Assignment to constant variable.');
    }
    
});  