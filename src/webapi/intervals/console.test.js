describe('console allows us to print information to the developer console (browser) or command line (node.js)',()=>{

    test('console.log to output to to the developer console (browser) or command line (node.js)', () => {
        console.log("print a string");
        console.log({output: "an object"});
    });

});