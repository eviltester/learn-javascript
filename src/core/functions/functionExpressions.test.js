test('function expressions are functions assigned to a variable', () => {

    const returnsAString = function (){
        return "Bob";
    }

    expect(returnsAString()).toBe("Bob");
});

test('function expressions can take arguments', () => {

    const add = function(num1, num2){
        return num1+num2;
    }

    expect(add(1,2)).toBe(3);
});


test('function expressions can have a default', () => {

    const add = function(num1=1, num2=2){
        return num1+num2;
    }

    expect(add(1)).toBe(3);
    expect(add(2,3)).toBe(5);
});


test('DIFFERENCE BETWEEN FUNCTIONS: function expressions can not be used before the declaration - variables are not hoisted', () => {

    try{
        const result = addNumbers(1,4);
    }catch(err){
        expect(err.name).toBe('ReferenceError');
        expect(err.message).toBe("Cannot access 'addNumbers' before initialization");
    }

    const addNumbers = function(num1, num2){
        return num1+num2;
    }
});


