describe('There are many different ways to create objects', ()=>{
    test('an empty object can be created using braces', () => {

        // this is called the 'literal' or 'initialization' notation
        
        var anObject={};

        expect(typeof anObject).toBe("object");
    });

    test('an object can have properties', () => {

        var anObject={a:2};

        expect(anObject.a).toBe(2);
    });

    test('properties can be accessed with an index notation', () => {

        var anObject={a:2};

        expect(anObject["a"]).toBe(2);
    });

    test('when a property does not exist, it is undefined', () => {

        var anObject={};

        expect(anObject.a).toBe(undefined);
    });

    test('properties can be added to objects after creation', () => {

        const anObject = {};

        anObject.a = 1;
        anObject["b"] = 2;

        expect(anObject.a).toBe(1);
        expect(anObject["a"]).toBe(1);

        expect(anObject.b).toBe(2);
        expect(anObject["b"]).toBe(2);
    });

    test('Properties can be removed from an object with delete', () => {

        var anObject={a:2};

        delete anObject.a;

        expect(anObject.a).toBe(undefined);
    });


    test('objects can be created using shorthand notation', () => {

        const a=1, b=2, c=3;
        const anObject = {a, b, c};

        expect(anObject.a).toBe(1);
        expect(anObject.b).toBe(2);
        expect(anObject.c).toBe(3);

        // this might be easier than 'key: value'
        const anotherObject = {a: a, b: b, c: c};

        expect(anotherObject.a).toBe(1);
        expect(anotherObject.b).toBe(2);
        expect(anotherObject.c).toBe(3);

    });

    test('objects can be created in different ways', () => {

        const aNewObject= new Object();
        const aLiteralObject = {};

        expect(typeof aNewObject).toBe("object");
        expect(typeof aLiteralObject).toBe("object");
    });


    test('Object.create requires a prototype', () => {

        const aPrototype = {a:1};
        const aCreatedObject = Object.create(aPrototype);

        expect(typeof aCreatedObject).toBe("object");
        expect(aCreatedObject.a).toBe(1);
    });

    test('functions can be used as objects', () => {

        function Position(x, y){
            this.x=x;
            this.y=y;
        }

        const xyPos = new Position(10,13);

        expect(typeof xyPos).toBe("object");
        expect(xyPos.x).toBe(10);
    });


    test('functions as objects can have methods declared using this with a function', () => {

        function Position(x, y){
            this.x=x;
            this.y=y;

            this.asArray = function(){
                return [this.x,this.y];
            }
        }

        const xyPos = new Position(10,13);

        expect(typeof xyPos).toBe("object");
        expect(xyPos.x).toBe(10);
        expect(xyPos.asArray()[0]).toBe(10);
    });

    test('functions as objects can have methods declared using the prototype', () => {

        function Position(x, y){
            this.x=x;
            this.y=y;
        }

        Position.prototype.asArray = function(){
            return [this.x,this.y];
        }

        const xyPos = new Position(10,13);

        expect(typeof xyPos).toBe("object");
        expect(xyPos.x).toBe(10);
        expect(xyPos.asArray()[0]).toBe(10);
    });
});


describe('we can access and object\'s keys and values', ()=>{
    test('Object.keys returns all the keys on the object as an array', () => {

        function Position(x, y){
            this.x=x;
            this.y=y;
        }

        const xyPos = new Position(10,13);

        const xyPosKeys = Object.keys(xyPos);

        expect(xyPosKeys.length).toBe(2);
        expect(xyPosKeys).toContain("x");
        expect(xyPosKeys).toContain("y");
        
    });

    test('Object.values returns all the keys on the object as an array', () => {

        function Position(x, y){
            this.x=x;
            this.y=y;
        }

        const xyPos = new Position(10,13);

        const xyPosValues = Object.values(xyPos);

        expect(xyPosValues.length).toBe(2);
        expect(xyPosValues).toContain(10);
        expect(xyPosValues).toContain(13);
        
    });

    test('Object.entries returns all the [key,value] pairs on the object as an array', () => {

        function Position(x, y){
            this.x=x;
            this.y=y;
        }

        const xyPos = new Position(10,13);

        const xyPosValues = Object.entries(xyPos);

        expect(xyPosValues.length).toBe(2);
        xyPosValues.forEach((xyPosValue)=>{
            key = xyPosValue[0];
            expect(["x","y"]).toContain(key);
            var expectedValue = key==="x" ? 10 : 13;
            expect(xyPosValue[1]).toBe(expectedValue);    
        });
        
    });

});
/*

Reference:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

*/