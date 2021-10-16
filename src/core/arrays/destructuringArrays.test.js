
test('arrays can be destructured into named variables', () => {

    const [one, two] = [1, 2, 3, 4];

    expect(one).toBe(1);
    expect(two).toBe(2);
});

test('arrays can be destructured skipping variables', () => {

    const [, two, three] = [1, 2, 3, 4];

    expect(two).toBe(2);
    expect(three).toBe(3);
});