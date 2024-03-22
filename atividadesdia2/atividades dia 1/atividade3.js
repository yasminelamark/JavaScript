const leia = require('readline-sync');
let salariobruto;
let adicionalnoturno;
let horasextras;
let desconto;
let salarioliquido;

salariobruto = leia.questionFloat('digite seu salario bruto: ');
adicionalnoturno = leia.questionFloat('digite seu adicional noturno: ');
horasextras = leia.questionFloat('digite suas horas extras: ');
desconto = leia.questionFloat('desconto: ');

salarioliquido = salariobruto+adicionalnoturno+(horasextras*5)-desconto;
console.log('o seu salario liquido é: ' +  salarioliquido);




