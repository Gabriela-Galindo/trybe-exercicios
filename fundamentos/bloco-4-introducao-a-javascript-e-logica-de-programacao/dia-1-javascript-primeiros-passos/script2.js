//programa 7

//const nota = 100;

// if (nota < 0 || nota > 100) {
//    console.log('erro');
// } else if (nota >= 90) {
//    console.log('A');
// } else if (nota >= 80 && nota < 90) {
//    console.log('B');
// } else if (nota >= 70 && nota < 80) {
//    console.log('C');
// } else if (nota >= 60 && nota < 70) {
//    console.log('D');
// } else if (nota >= 50 && nota < 60) {
//    console.log('E');
// } else {
//    console.log('F');
// }

//programa 8

const a = 3;
const b = 5;
const c = 7;

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//    console.log('true');
// } else {
//    console.log('false');
// }

//programa 9

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    console.log('true');
} else {
    console.log('false');
}

// programa 10

const custo = 200;
const venda = 200;
const custoTotal = custo + custo / 5;
const lucro = venda - custoTotal;

if (custo < 0 || venda < 0) {
    console.log('erro');
} else {
    console.log(lucro);
}
