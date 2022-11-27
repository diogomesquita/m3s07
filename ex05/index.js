/*
Declare duas variáveis n1 e n2. Faça as comparações se os dois números são iguais, se a
soma dos dois é maior que 10 e se a soma deles é maior ou menor que ou menor que 20.

Após isso, imprima no console uma template string como a seguinte do exemplo, que varie
de acordo com as comparações e seus resultados.

"Os números 5 e 11 não são iguais. Sua soma é 16, que é maior que 10 e menor que 20".
*/

let n1 = 5, n2 = 11;

function haIgualde(n1, n2) {
    if(n1 === n2) {
        return "sim,"
    }
    else {
        return "não"
    }
}

function soma(n1, n2) {
    return n1 + n2;
}

function maiorMenor(n) {
    if(soma(n1, n2) > n){
        return "maior";
    } else {
        return "menor";
    }
}

console.log(`os números ${n1} e ${n2} ${haIgualde(n1, n2)} são iguais. Sua soma é de ${soma(n1, n2)}, que é ${maiorMenor(10)} que 10 e ${maiorMenor(20)} que 20. }`);
