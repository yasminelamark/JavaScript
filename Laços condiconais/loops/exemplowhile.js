const leia = require('readline-sync');

let num, num2;

continuar = leia.question("\nDigite S para entrar no programa de multiplicação: "). toUpperCase

while(continua === "S"){
    num = leia.questionInt("\nDigite um numero para multiplicar: ");
    num2 = leia.questionInt("\n Por quanto quer multiplicar? ");
    console.log('\n ${num} * ${num2} = ${num * num2}');

    leia.question('Quer S" &continuar os calculos digite S ou N para sair:').toUpperCase().
    continua = leia.question("Quer continuar os calculos digite S ou N para sair")

    while(continua !==  "S" && continua !== "N"){
        
       console.log('Digite a opção correta')

     continuaa = leia.question('Quer continuar os calculos Digite o S ou N para sair:).toUpperCase ')