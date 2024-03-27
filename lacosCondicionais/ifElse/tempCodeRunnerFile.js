const leia = require("readline-sync");

let saldo = 1000;
let pergunta;
const operacaoBancaria = leia.questionInt("Digite a operacao: ");

switch (operacaoBancaria) {
  case 1:
    pergunta = leia.questionInt("Quanto deseja sacar: ");

    if (pergunta <= saldo) {
      saldo -= pergunta;
      console.log("Novo saldo: R$", saldo);
      break
    }
    console.log("Saldo Insuficiente para saque");
    break

  case 2:
    pergunta = leia.questionInt("Quanto deseja depositar: ");

    saldo += pergunta
    console.log("Novo saldo: R$", saldo);
    break

  case 3:
    console.log(saldo)
}
