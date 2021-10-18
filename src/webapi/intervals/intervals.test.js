describe('we can run code at regular time intervals in a browser or in node.js',()=>{

    test('setInterval creates code that runs at a specific interval, clearInterval stops it', async () => {

        var countInterval=0;
        const interval = setInterval(()=>{
                            //console.log("running every 100 milliseconds");
                            countInterval++
                        },100);

        //console.log("pausing");
        await new Promise((r) => setTimeout(()=>{
                                    //console.log("finished pausing");
                                    r()}, 1200));

        //console.log(`interval ran ${countInterval} times`);
        expect(countInterval).toBeGreaterThan(10);
        clearInterval(interval);
    });

    test('setInterval can take parameters', async () => {

        var countInterval=0;
        const param1="p1";
        const param2="p2";

        const interval = setInterval((p, q)=>{
                            //console.log(`running every 100 milliseconds ${p} ${q}`);
                            countInterval++
                        },100, param1, param2);

        //console.log("pausing");
        await new Promise((r) => setTimeout(()=>{
                                    //console.log("finished pausing");
                                    r()
                                 }, 500));

        //console.log(`param interval ran ${countInterval} times`);
        expect(countInterval).toBeGreaterThan(2);
        clearInterval(interval);
    });
});