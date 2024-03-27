 const leia = require("readline-sync");
 let number;

 

        console.log("Digite um número: ");
        number = leia.questionInt();
        

       
        
        if (number % 2 == 0) {
            if (number> 0) {
                console.log("O Número " + number + " é par e positivo!");
            } else if (number < 0) {
                console.log("O Número " + number + " é par e negativo!");
            } else {
                console.log("O Número é zero!");
            }
        } else {
            if (number > 0) {
                console.log("O Número " + number + " é ímpar e positivo!");
            } else if (number < 0) {
                console.log("O Número " + number + " é ímpar e negativo!");
            } else {
                console.log("O Número é zero!");
            }
        }
    
