 const leia = require('readline-sync');

let nota1,nota2, nota3,nota4;

nota1= leia.questionFloat("digite sua nota: ");
nota2= leia.questionFloat("digite sua nota: ");
nota3= leia.questionFloat("digite sua nota: ");
nota4= leia.questionFloat("digite sua nota: ");

let media = (nota1+nota2+nota3+nota4)/4;

console.log (media);
