/*
Dado o seguinte objeto, crie uma cópia dele na sua máquina e realize as operações indicadas:

let objDevInHouse= {
plataforma: "DevInHouse",
cursos: {dados: ["SQL"],
backend: ["Java", "Spring"],
frontend: ["Javascript", "React"]},
inovacao_constante: true
};

1- Crie um objUser com suas informaçõe spessoais de nome (primeiro nome), idade e cidade;
2- Adicione o objUser como mais um item do objDevInHouse;
3- Altere seu campo "nome" em objUser para o seu nome completo, de forma que o objUser já esteja inserido no objDevInHouse antes da alteração;
4- Altere o valor de idade de objUser de number para string;
5- Imprima seu objeto no console usando console.table().*/

let aluno = {
    nome: "Diogo",
    idade: 38,
    cidade: "floripa"
}

let objDevInHouse= {
    plataforma: "DevInHouse",
    cursos: {dados: ["SQL"],
    backend: ["Java", "Spring"],
    frontend: ["Javascript", "React"]},
    inovacao_constante: true,
    objUser : aluno
    };

objDevInHouse.objUser.nome = "Diogo de Jesus Mesquia dos Santos";

objDevInHouse.objUser.idade = JSON.stringify(objDevInHouse.objUser.idade) ;

console.table(objDevInHouse);