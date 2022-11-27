/*
Declare três variáveis, x, y e z. x deve receber o valor 17, y deve receber 21 e z deve receber 42. Após isso, imprima no console os resultados (booleans) para cada um dos testes.
1- Se x for menor que y e se y for menor que z;
2- Se x for diferente de z ou y for maior que z;
3- Se z for igual a 2 vezes y;
4- Se x + y for maior que z;
5- Se x ao quadrado mais y ao quadrado forem maiores que z ao quadrado.
*/


let x = 17, y = 21, z = 42;

console.log((x<y) && (y<z));
console.log((x !== z) || (y > z));
console.log(z === (y * 2));
console.log((x + y) > z);
console.log(((x ** 2) + (y ** 2)) > (z ** 2));