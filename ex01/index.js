var nome = "diogo";

{
    let nome = "mesquita";
    console.log(`Dentro do bloco o nome é ${nome}!`);
}

console.log("Fora do bloco o nome é " + nome);

let horaAgora = new Date().getMilliseconds();
console.log(horaAgora);