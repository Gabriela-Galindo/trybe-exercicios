const myRemove = require('./script2');

describe('remove item da array', () => {
    test('Remove 3', () => {
        const lista = [1, 2, 3, 4];
        expect([1, 2, 4]).toEqual(myRemove(lista, 3));
    });
    test('Não retorna a array [1, 2, 3, 4]', () => {
        const lista = [1, 2, 3, 4];
        expect(myRemove(lista, 3)).not.toEqual([1, 2, 3, 4]);
    });
    test('Se retorna o array esperado', () => {
        const lista = [1, 2, 3, 4];
        expect(myRemove(lista, 5)).toEqual([1, 2, 3, 4]);
    });
});