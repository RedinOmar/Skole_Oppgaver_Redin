const cloneArray = require('./CloneArray')
test('om array er "lik"', () => {
    const arrayExample = [1, 2, 3];
    expect(cloneArray(arrayExample)).toEqual(arrayExample)
})