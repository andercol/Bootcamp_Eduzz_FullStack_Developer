# Symbol

De modo bem simples e direto, `Symbol` (símbolo) é um tipo primitivo que armazena um valor único. Seu propósito é esse, servir como um identificador único.

Pense neles como as suas digitais: até irmãos gêmeos idênticos possuem o mesmo DNA mas possuem digitais diferentes, significando que cada dedo é único.

Para declarar um `Symbol` basta usar a função `Symbol()`.



~~~javascript
const meuSymbol = Symbol();
~~~

### Referência:

[JavaScript: você sabe o que são e por que usar Symbols? | Blog TreinaWeb](https://www.treinaweb.com.br/blog/javascript-voce-sabe-o-que-sao-e-por-que-usar-symbols/)



~~~javascript
// Symbols
const uniqueId = Symbol("Hello");
// Well known symbols
// pode ser utilizados para aidcionar propriedades ao seu objeto
Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4]
const it = arr[Symbol.iterator](): //gera uma interface responsável pela iteração do array.
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
~~~

### Iterators (Iteradores)

Um objeto é um **iterator (iterador)** quando sabe como acessar itens numa coleção, um por vez, enquanto mantém rastreada a posição atual em uma dada sequência. Em JavaScript um iterator é um objeto que oferece o método `next(),` o qual retorna o próximo item da sequência. Este método retorna um objeto com duas propriedades: `done` e `value`.

Uma vez criado, um objeto iterator pode ser usado explicitamente ao chamar repetidas vezes o método `next()`.

~~~javascript
const makeIterator = (array) => {

let nextIndex = 0;

return {
 next : () => {
   return nextIndex < array.length ?
    {value: array[nextIndex ++], done: false} :
    {done: true};
   }
 }
};
~~~

----

### Generators

Enquanto os iteradores são ferramentas muito úteis, sua criação requer um cuidado devido à necessidade de manter explícito seu estado interno. **[Generators](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Generator)** provêm uma alternativa poderosa: eles te permitem definir um algorítimo iterativo escrevendo uma função simples que pode manter seu estado próprio.

Generator é um tipo especial de função que trabalha como uma factory para iteradores. A função vira um generator se ela contém uma ou mais expressões [`yield`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/yield) e se ela usa a sintaxe [`function*`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*).

~~~javascript
function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...s
~~~

~~~javascript
// Generators
function* hello(){
    console.log('Hello');
    yield;
    console.log('From');
     const value = yield;
    console.log(value);
}
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));
~~~

