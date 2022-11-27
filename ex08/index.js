/*
Crie uma variável birthYear que contenha o ano do seu nascimento. Declare também uma variável currentYear com o ano atual.
Crie duas soluções, uma usando while e outra usando do…while para imprimir todos os anos, desde o seu nascimento até o ano atual.

Dica: se fizer as duas soluções em um mesmo script, lembre-se de resetar o valor do birthYear após a primeira solução,
caso necessário.
*/

let birthYear = 1984;
const currentYear = new Date().getFullYear();

while (birthYear <= currentYear) {
console.log(birthYear);
birthYear++;
}

birthYear = 1984;
console.log("-------")

do {
    console.log(birthYear);
    birthYear++;
} while (birthYear <= currentYear)