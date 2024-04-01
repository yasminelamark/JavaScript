const readline = require('readline-sync');

const matriz = [];
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;

for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = parseInt(readline.question(`Digite o elemento da posicao [${i}][${j}]: `));
        if (i === j) {
            somaDiagonalPrincipal += matriz[i][j];
        }
        if (i + j === 2) {
            somaDiagonalSecundaria += matriz[i][j];
        }
    }
}

console.log("\nElementos da Diagonal Principal:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][i]);
}

console.log("\nElementos da Diagonal Secundaria:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][2 - i]);
}

console.log("\nSoma dos Elementos da Diagonal Principal:");
console.log(somaDiagonalPrincipal);

console.log("\nSoma dos Elementos da Diagonal Secundária:");
console.log(somaDiagonalSecundaria);
