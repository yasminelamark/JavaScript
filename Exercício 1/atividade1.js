const leia = require('readline-sync');


let salario,abono 
salario= leia.questionFloat("Digite o seu salario")
abono= leia.questionFloat("digite o seu abono")
let novoSalario= abono+salario
console.log("seu novo salario é", novoSalario)

