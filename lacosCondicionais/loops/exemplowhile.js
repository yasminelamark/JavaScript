const leia = require('readline-sync');

let num, num2;

continua = leia.question("\nDigite S para entrar no programa de multiplicacao ").toUpperCase()

while(continua === "S"){10
    num = leia.questionInt("\nDigite um numero para multiplicar: ");
    num2 = leia.questionInt("\n Por quanto quer multiplicar? ");
console.log(` ${num} * ${num2} = ${num * num2}`);

    leia.question('Quer continuar os calculos digite S ou N para sair:').toUpperCase().
    continua = leia.question("Quer continuar os calculos digite S ou N para sair")

    while(continua !==  "S" && continua !== "N"){
        
       console.log('Digite a opção correta')

     continua = leia.question('Quer continuar os calculos Digite o S ou N para sair:).toUpperCase ')
    }
  }