let n1;
let n2;
let n3; 
let n4;
const leia = require('readline-sync')
let resultado;
n1= leia.questionFloat('insira o primeiro numero: ');
n2= leia.questionFloat('insira o segundo numero: ');
n3= leia.questionFloat('insira o terceiro numero: ');
n4= leia.questionFloat('insira o quarto numero: ');

resultado = ( n1 * n2) - (n3 * n4);
console.log('a diferença é: ' + resultado ); 



