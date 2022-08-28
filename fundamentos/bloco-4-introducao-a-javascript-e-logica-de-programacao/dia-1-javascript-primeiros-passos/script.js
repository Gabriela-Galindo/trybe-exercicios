const a = 2;
const b = 5;
const c = 9;
const x = 0;

// programa 1
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

//programa 2
// if(a > b) {    
//    console.log(a);
// } else {    
//    console.log(b);
// }

//programa 3
// if(a > b && a > c) {    
//    console.log(a);
// } else if(b > a && b > c) {
//    console.log(b);
// } else {    
//    console.log(c);
// }

//programa 4
//if (x > 0) {    
//    console.log('positive');
// } else if (x < 0) {
//    console.log('negative');
// } else {    
//   console.log('zero');
// }

//programa 5
// const anguloA = 30;
// const anguloB = 45;
// const anguloC = 90;

// if(anguloA < 0 || anguloB < 0 || anguloC < 0) {
//     console.log('erro');
// } else if (anguloA + anguloB + anguloC === 180) {
//     console.log('true');
// } else {
//     console.log('false');
// }

//programa 6
let peçaDeXadrez = 'cavalo';

switch (peçaDeXadrez.toLowerCase()) {
    case 'peão':
        console.log('move uma casa');
        break;
    case 'bispo':
        console.log('diagonal');
        break;
    case 'torre':
        console.log('horizontal e vertical');
        break;
    case 'cavalo':
        console.log('move em L');
        break;
    case 'rainha':
        console.log('move para onde quiser');
        break;
    case 'rei':
        console.log('move apenas uma');
        break;
    default:
        console.log('erro');
}