const cloneArray = require('./cloneArray');

test('Test om array er "lik"', () => {

    const arrayExample = [1, 2, 3];
    expect(cloneArray(arrayExample)).toEqual(arrayExample)
    expect(cloneArray(arrayExample)).not.toBe(arrayExample)
})

