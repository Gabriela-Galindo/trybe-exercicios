const sum = require('./script');

test('soma de 4 e 5 igual à 9', () => {
    expect(sum(4, 5)).toBe(9);
});

test('soma de 0 e 0 igual à 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('soma de 4 e "5" lança erro', () => {
    expect(() => {sum(4, "5") }).toThrow();
});

test('se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => {sum(4, "5") }).toThrowError(new Error('parameters must be numbers'));
});