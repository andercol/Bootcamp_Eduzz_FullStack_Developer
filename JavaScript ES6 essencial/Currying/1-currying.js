/* Currying - técnica que transforma uma função de multiplos parametros, onde o primeiro sempre se repete em uma cadeia de de funções que recebe somente um parametro. */

function soma(a){
    return function(b){
        return a + b;
    }
}
const soma2 = soma(2);

console.log(soma2(2)); // soma 2 + 2
console.log(soma2(3)); // soma 2 + 3
console.log(soma2(4)); // soma 2 + 4