/*
1- Dado o array de números:

const numbers = [2, 4, 8, 16, 32, 64,128, 256, 512, 1024, 2048];

Utilizando o For ou For of, some todos os valores do array e imprima o resultado.
Imprima através do resultado da soma dos valores, a média aritmética.
(Lembrando que a média aritmética é a soma dos valores divida pela quantidade de elementos.)

2- Dado o objeto:
const notas = {
bimestre1: 7.0,
bimestre2: 3.7,
bimestre3: 6.4,
bimestre4: 8.6
}

Utilizando o For in, imprima a soma dos valores das notas.
Após a soma dos valores, descubra a média e faça um if/else para descobrir se o aluno foi aprovado ou não.
Com a média sendo 7, o resultado do console caso seja reprovado é “O aluno não foi aprovado com a nota…”,
caso tenha sido aprovado deverá imprimir “O aluno foi aprovado”.
*/

const numbers = [2, 4, 8, 16, 32, 64,128, 256, 512, 1024, 2048];
let somaValores = 0;
for (const n of numbers) {
    somaValores += n;
}

media = somaValores / numbers.length;

console.log('soma dos valores:' + somaValores);
console.log(`média aritimética: ${media.toFixed(2)}`)


const notas = {
    bimestre1: 7.0,
    bimestre2: 3.7,
    bimestre3: 6.4,
    bimestre4: 8.6
    }

let somaNotas = 0.0;

for (let o in notas){
    somaNotas += notas[o];
}

console.log("Soma das notas: " +somaNotas.toFixed(2));

let mediaNotas = somaNotas /Object.keys(notas).length;

console.log("média = " +mediaNotas.toFixed(2));

if(mediaNotas >= 7) {
    console.log(`O aluno foi aprovado`);
} else {
    console.log(`O aluno não foi aprovado com a nota… ${mediaNotas.toFixed(2)}`);
}