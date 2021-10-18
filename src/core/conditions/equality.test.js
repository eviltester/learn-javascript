describe('Do not use = in a condition', ()=>{

    test('the assignment operator = returns the assigned value e.g. a=2 returns 2', () => {

        var a=2;
        var b=c=3;
    
        expect(a=2).toBe(2);
        expect(a=b=c=4).toBe(4);
        expect(a).toBe(4);
        expect(b).toBe(4);
        expect(c).toBe(4);

    });

    test('conditions require a boolean so javascript coerces values to truthy or falsey', () => {

        // a=4 sets a to 4 and returns 4, 4 is coerced in a condition as 'truthy' so passes
        // truthy is any value that is not falsy >0 is truthy
        if(a=4){
            console.log("I knew a was 4");
        }

        // falsey - https://developer.mozilla.org/en-US/docs/Glossary/Falsy
        // false, 0, -0, null, undefined, ""

        expect((a=2) ? true : false).toBe(true); // truthy
        expect((a=0) ? true : false).toBe(false); //falsy
    });

    test('most of the time an = in a condition is a mistake, accidentally changing the value of the variable and creating an unreliable condition', () => {

        var a=2;
        expect(a).toBe(2); 

        if(a=4){
            console.log("I meant to check the value == 4 not change it to 4");
        }

        expect(a).toBe(4); // I really meant to check the value, not change it 
    });

});

describe('comparison with == is a value comparison', ()=>{

    test('the == operator with coerce or convert types to support the comparison', () => {

        expect(2==2).toBe(true);
        expect(2=="2").toBe(true);
        expect(true==true).toBe(true)
        expect(true==2).toBe(false)
    });


});

describe('comparison with === is a value and type comparison', ()=>{

    test('the === operator will not convert or coerce, both value and type must be the same',()=>{
        expect(2===2).toBe(true);
        expect(2==="2").toBe(false);    
        expect(true===true).toBe(true)
        expect(true===2).toBe(false)
    })
});

describe('not equal comparison uses != or !==', ()=>{

    test('the != operator with coerce or convert types to support the comparison', () => {

        expect(2!=2).toBe(false);
        expect(2!="2").toBe(false);
        expect(true!=true).toBe(false)

        expect(true!=2).toBe(true)
        expect(2!=3).toBe(true);
        expect(2!="3").toBe(true);
    });

    test('the !== operator will not convert or coerce, both value and type are compared',()=>{
        expect(2!==2).toBe(false);
        expect(2!=="2").toBe(true);    
        expect(true!==true).toBe(false)
        expect(true!==2).toBe(true)
    })

});

describe('recommended to use === and !==', ()=>{
    test('there are nuances when using ==',()=>{
        expect(1==true).toBe(true);
        expect(""==false).toBe(true);
        expect(""==0).toBe(true);
        expect(0==[]).toBe(true);
        expect(0==[0]).toBe(true);
        expect(0==false).toBe(true);
        expect(true==[1]).toBe(true);
        expect(undefined==null).toBe(true);
    })
    test('using === avoids nuances and simple errors',()=>{
        expect(1===true).toBe(false);
        expect(""===false).toBe(false);
        expect(""===0).toBe(false);
        expect(0===[]).toBe(false);
        expect(0===[0]).toBe(false);
        expect(0===false).toBe(false);
        expect(true===[1]).toBe(false);
        expect(undefined===null).toBe(false);
    })
});