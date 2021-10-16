test('an array contains values zero indexed by position', () => {

    const anArray=[1, 2, 3, 4];

    expect(anArray[0]).toBe(1);
    expect(anArray[3]).toBe(4);
});

test('an array is an object with methods like length', () => {

    const anArray=[1, 2, 3, 4];

    expect(anArray.length).toBe(4);
});

test('an array can contain mixed types', () => {

    const anArray=[1, "two", {value: "three"}, 4];

    expect(anArray[0]).toBe(1);
    expect(anArray[1]).toBe("two");
    expect(anArray[2].value).toBe("three");
});