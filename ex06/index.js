/*
Crie uma função que seja uma calculadora, ela deve pedir para o usuário escolher entre as seguintes operações (use prompt para isso):
1 - Soma (+)
2 - Subtração (-)
3 - Multiplicação (*)
4 - Divisão Real (/)
5 - Divisão Inteira (%)
6 - Potenciação (**)
Ela deve entender quando recebe valores não numéricos e devolver uma operação inválida e pedir novamente.
Após escolher uma operação válida ele deve pedir para o usuário inserir dois valores para serem calculados com a operação escolhida. A calculadora também deve ser capaz de reconhecer que um dos valores não são válidos e pedir novamente.
O resultado deve ser mostrado no formato de string template como o exemplo a seguir:
${n1} + ${n2} = ${resultado}
*/ 
var opt;
var opcoes = ['1', '2', '3', '4', '5', '6'];


function soma() {
    do {
    var n1 = Number(prompt('informe o valor da 1ª variável'));
    } while (isNaN(n1));

    do {
    var n2 = Number(prompt('informe o valor da 2ª variável'));
    } while (isNaN(n2));

    alert(`${n1} + ${n2} = ${n1 + n2}`);
}
function subtracao() {
    do {
    var n1 = Number(prompt('informe o valor da 1ª variável'));
    } while (isNaN(n1));

    do {
    var n2 = Number(prompt('informe o valor da 2ª variável'));
    } while (isNaN(n2));
    
    alert(`${n1} - ${n2} = ${n1 - n2}`);
    
}
function multiplicacao() {
    do {
        var n1 = Number(prompt('informe o valor da 1ª variável'));
        } while (isNaN(n1));
    
        do {
        var n2 = Number(prompt('informe o valor da 2ª variável'));
        } while (isNaN(n2));
        
        alert(`${n1} * ${n2} = ${n1 * n2}`);
}
function divisaoReal() {
    do {
        var n1 = Number(prompt('informe o valor da 1ª variável'));
        } while (isNaN(n1));
    
        do {
        var n2 = Number(prompt('informe o valor da 2ª variável'));
        } while (isNaN(n2));
        
        alert(`${n1} / ${n2} = ${n1 / n2}`);

}
function divisaoInteira() {
    do {
        var n1 = Number(prompt('informe o valor da 1ª variável'));
        } while (isNaN(n1));
    
        do {
        var n2 = Number(prompt('informe o valor da 2ª variável'));
        } while (isNaN(n2));
        
        alert(`${n1} % ${n2} = ${n1 % n2}`);

}
function potenciacao() {
    do {
        var n1 = Number(prompt('informe o valor da 1ª variável'));
        } while (isNaN(n1));
    
        do {
        var n2 = Number(prompt('informe o valor da 2ª variável'));
        } while (isNaN(n2));
        
        alert(`${n1} ** ${n2} = ${n1 ** n2}`);
}

do {
    opt = prompt("Informe o número Correspondente à opção desejada: ");

    switch(opt) {
        case '1':
            soma();
        break;
        case '2':
            subtracao();
        break;
        case '3':
            multiplicacao();
        break;
        case '4':
            divisaoReal();
        break;
        case '5':
            divisaoInteira();
        break;
        case '6':
            potenciacao();
        break;
        default:
            alert("opção Inválida!");
    }

} while (!opcoes.includes(opt));
