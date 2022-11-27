let minutos = 48;
var tempo = new Date();
let horaAgora = Number(`${(tempo.getHours()).toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping: false})}.${(tempo.getMinutes()).toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping: false})}`);
let resultadoSoma = (tempo.getMinutes() + minutos);
let resultadoSubtracao = (tempo.getMinutes() - minutos);

function sejeMenas() {
    if(resultadoSubtracao <= 0) {
        return `${(tempo.getHours() - 1).toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping: false})}.${(60 + resultadoSubtracao).toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping: false})}`;
    } else {
        return `${(tempo.getHours()).toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping: false})}.${resultadoSubtracao.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping: false})}`
    }
}

function sejeMaisi() {
    if(resultadoSoma >= 60 ) {
        return `${(tempo.getHours() + 1).toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping: false})}.${(resultadoSoma - 60).toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping: false})}`;
    } else {
        return `${(tempo.getHours()).toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping: false})}.${resultadoSoma.toLocaleString('pt-BR', {minimumIntegerDigits: 2, useGrouping: false})}`;
    }
}

console.log(horaAgora);
console.log(`Há ${minutos} minutos eram ${sejeMenas()} e Daqui ${minutos} minutos serão ${sejeMaisi()}`);