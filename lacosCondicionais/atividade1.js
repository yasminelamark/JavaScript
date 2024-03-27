const readlineSync = require('readline-sync');


const A = parseInt(readlineSync.question('Digite o número A: '));
const B = parseInt(readlineSync.question('Digite o número B: '));
const C = parseInt(readlineSync.question('Digite o número C: '));


const soma = A + B;


if (soma > C) {
    console.log('{A} + {B} = {soma} > {C}');
    console.log('A Soma de A + B é Maior do que C');
} else if (soma < C) {
    console.log('{A} + {B} = {soma} < {C}');
    console.log('A Soma de A + B é Menor do que C');
} else {
    console.log('{A} + {B} = {soma} = {C}'2)
    console.log('A Soma de A + B é Igual a C');
}
