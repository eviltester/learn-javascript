test('an object can have methods', () => {

    var anObject={
            a: 1,
            double: function(doubleThis){
                return doubleThis*2;
            }
        };

    expect(anObject.double(2)).toBe(4);
});

test('use this to access object properties internally', () => {

    var anObject={
            a: 1,
            doubleA: function(){
                return this.a*2;
            }
        };

    expect(anObject.a).toBe(1);
    expect(anObject.doubleA()).toBe(2);
});


test('methods can be declared without the function keyword', () => {

    var anObject={
            a: 1,
            doubleA(){
                return this.a*2;
            }
        };

    expect(anObject.doubleA()).toBe(2);
});

test('methods can be added to an object after creation', () => {

    var anObject={
            a: 1
        };

    anObject.getA = function(){
        return this.a;
    }

    expect(anObject.getA()).toBe(1);
});

/*

The arrow function is a closure so `this` refers to `this` at the time the function is created,
not `this` object that the function is added to as a method.

*/
test('we cannot use arrow notation to assign a method if it uses this', () => {

    var anObject={
            a: 1
        };

    anObject.getA = ()=>{
        return this.a;
    }

    expect(anObject.getA()).toBe(undefined);
});