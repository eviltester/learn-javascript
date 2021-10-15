test('arrow functions are assigned to a variable for re-use', () => {

    const returnsAString = ()=>{
        return "Bob";
    }

    expect(returnsAString()).toBe("Bob");
});

test('arrow functions can take arguments', () => {

    const add = (num1, num2)=>{
        return num1+num2;
    }

    expect(add(1,2)).toBe(3);
});

test('arrow function arguments can have a default', () => {

    const add = (num1=1, num2=2)=>{
        return num1+num2;
    }

    expect(add(1)).toBe(3);
    expect(add(2,3)).toBe(5);
});

test('arrow functions can support a one line syntax without scope braces', () => {

    const add = (num1,num2) => num1+num2;

    expect(add(1,2)).toBe(3);
});

test('DIFFERENCE BETWEEN FUNCTIONS: arrow functions can not be used before declaration - variables are not hoisted', () => {

    try{
        const result = addNumbers(1,4);
    }catch(err){
        expect(err.name).toBe('ReferenceError');
        expect(err.message).toBe("Cannot access 'addNumbers' before initialization");
    }
    

    const addNumbers = (num1, num2)=>{
        return num1+num2;
    }
});

