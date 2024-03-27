const readline = require('readline-sync');

console.log("Digite o número A:");
const A = readline.questionInt();

console.log("Digite o número B:");
const B = readline.questionInt();

console.log("Digite o número C:");
const C = readline.questionInt();

const soma = A + B;

console.log(A + " + " + B + " = " + soma + " " + (soma > C ? ">" : (soma < C ? "<" : "=")) + " " + C);

if (soma > C) {
    console.log("A Soma de A + B é Maior do que C");
} else if (soma < C) {
    console.log("A Soma de A + B é Menor do que C");
} else {
    console.log("A Soma de A + B é Igual a C");
}
