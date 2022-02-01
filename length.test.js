const stringLength = require('./length.js');

test('string length is 10', () => {
    expect(stringLength('abcdefghij')).toBe(10)
});

test('string length is 4', () => {
    expect(stringLength('dani')).toBe(4)
});

test('string length is too large', () => {
    expect(() => {
        stringLength('qwertyuiopdf') }).toThrow() 
});

test('string length is too large', () => {
    expect(() => {
        stringLength('') }).toThrow() 
});