let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for(let index = 0; index < numbers.length; index++) {
//     soma += numbers[index]; 
// }


// if(soma / numbers.length > 20) {
//     console.log('valor maior que 20');
// } else {
//     console.log('valor menor ou igual a 20');
// }

// let numeroMaior = numbers[0]

// for(let index = 1; index < numbers.length; index += 1) {
//     if(numbers[index] > numeroMaior) {
//         numeroMaior = numbers[index];
//     }
// }

// console.log(numeroMaior);

let impares = 0;

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 != 0) {
        console.log(impares.length += 1);
    } else {
        console.log('nenhum valor ímpar encontrado');
    }
}