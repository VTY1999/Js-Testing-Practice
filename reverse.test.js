const reverseString = require('./reverse.js');

test('reverse "good" to "doog"', () => {
    expect(reverseString('good')).toBe('doog')
});

test('reverse "morning" to "gninrom"', () => {
    expect(reverseString('morning')).toBe('gninrom')
});

test('reverse "boy" to "yob"', () => {
    expect(reverseString('boy')).toBe('yob')
});

test('reverse "francis" to "sicnarf"', () => {
    expect(reverseString('francis')).toBe('sicnarf')
});