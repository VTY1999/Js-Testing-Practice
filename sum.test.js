const calculator = require('./sum.js');

describe('addition', () => {
    test('1 + 4 = 5', () => {
        expect(calculator.add (1, 4)).toBe(5)
    }); 
});