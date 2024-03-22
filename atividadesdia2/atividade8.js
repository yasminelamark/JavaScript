const leia = require('readline-sync');

let valor, saldo = 1.000.00, operacao;

console.log("informe a Operação" );
console.log("1 - Saldo");
console.log("2 - Saque)");
console.log("3 -  Depósito");

operacao = leia.questionInt("Digite a opcao desejada");

switch(operacao){

    case 1: 
         console.log("Saldo");

         console.log(`\nDigite o valor:`);
}