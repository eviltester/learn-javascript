test('arrays have a ...spread operator to remove the array and treat all elements as one', () => {

    const myArray = [1, 2, 3, 4];
    const newArray = [...myArray];

    expect(newArray.length).toBe(4);
    expect(newArray[0]).toBe(1);
});

test('spread ... can be used to pass array values to functions', () => {

    const add = (x, y)=>{
        return x+y;
    }

    const myArray = [1, 2, 3, 4];
    const onePlusTwo = add(...myArray);

    expect(onePlusTwo).toBe(3);
});


test('spread ... an array into individual elements', () => {

    const myArray = [1, 2, 3, 4];

    const withSpread = [0, ...myArray, 5];

    expect(withSpread[0]).toBe(0);
    expect(withSpread[1]).toBe(1);
    expect(withSpread[4]).toBe(4);
    expect(withSpread[5]).toBe(5);
});


test('... can be used as the "Rest element" during destructuring to capture values', () => {

    const myArray = [1, 2, 3, 4];

    const [head, ...others] = myArray;

    expect(head).toBe(1);
    expect(others.length).toBe(3);
    expect(others[0]).toBe(2);
    expect(others[2]).toBe(4);
});

// TODO: spread operator with objects