test('functions do stuff and return values', () => {

    function returnsAString(){
        return "Bob";
    }

    expect(returnsAString()).toBe("Bob");
});

test('functions can take arguments', () => {

    function add(num1, num2){
        return num1+num2;
    }

    expect(add(1,2)).toBe(3);
});


test('function arguments can have a default', () => {

    function add(num1=1, num2=2){
        return num1+num2;
    }

    expect(add(1)).toBe(3);
    expect(add(2,3)).toBe(5);
});


test('functions can be used before the declaration - the declaration is hoisted to the top of the scope', () => {

    expect(addNumbers(1,4)).toBe(5);

    function addNumbers(num1, num2){
        return num1+num2;
    }
});




