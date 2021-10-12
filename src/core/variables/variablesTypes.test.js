test('variable types are not fixed, they are based on the value', ()=>{

    a=1;
    expect(typeof a).toBe("number");

    a="bob";
    expect(typeof a).toBe("string")

});

test('primitive values are automatically coerced when combined: number + string == string', ()=> {
    
    a=1;
    b="400";

    // string concatenation
    c=a+b;

    expect(typeof c).toBe("string");
    expect(c).toBe("1400");
    

    d=b+a;
    expect(typeof d).toBe("string");
    expect(d).toBe("4001");
});  

test('number + boolean is number', ()=> {
    
    a=1;
    b=true; //true==1

    // string concatenation
    c=a+b;

    expect(typeof c).toBe("number");
    expect(c).toBe(2);
    

    d=1+false; // false==0
    expect(typeof d).toBe("number");
    expect(d).toBe(1);
 });  