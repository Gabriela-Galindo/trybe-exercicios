// Programa 5

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.


let array = [2, 3, 2, 5, 8, 2, 3];

function mostRepeated (inteiros) {
    let contador = {};
    for (let index = 0; index < inteiros.length; index += 1) {
        let key = inteiros[index];
        if (contador[key] === undefined) {
            contador[key] = 1;
        } else {
            contador[key] = contador[key] + 1;
        }
    }
    let numRepeticoes = 0;
    let numRepetido = 0;

    for (let key in contador) {
        if (numRepeticoes < contador[key]) {
            numRepeticoes = contador[key];
            numRepetido = key;
        }
    }

    return numRepetido;
}

console.log(mostRepeated(array));