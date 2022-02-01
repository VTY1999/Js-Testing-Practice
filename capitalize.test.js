const capitalizeString = require('./capitalize.js')

test('hay to Hay', () => {
    expect(capitalizeString('hay')).toBe('Hay');
})

test('This should be a string', () => {
    expect(() => {
        capitalizeString(200);
    }).toThrow();
})