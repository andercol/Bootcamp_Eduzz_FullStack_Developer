# JavaScript ES6 essencial



## História

* Lançado em setembro de 1995
* Criado por Brendan Eich
* ECMAScript - Padronização das especificações
* TC39 - Comite responsável pela evolução do Java Script
  * [GitHub Comite TC39 - https://github.com/tc39]([Ecma TC39 (github.com)](https://github.com/tc39)) 

-----

## Conceitos da linguagem

* Linguagem interpretada
* Linguagem de tipagem fraca e dinâmica
* Typescript - superset da linguagem Java Script
  * [TypeScript: www.typescriptlang.org](https://www.typescriptlang.org/)
  * adiciona tipos e funcionalidades que não tem por padrão no Java Script
* Funções de primeira classe e ordem maior 
  * Pode ser atribuida a uma variável
  * pode ser atribuida a um objeto
  * pode ser passada como argumento

~~~javascript
//Funcoes 1-funcoes.js
function getName(){
    return 'Guilherme Cabrini';
}
function logFn(fn){
    console.log(fn());
}
const logFnResult = logFn;

logFnResult(getName);
~~~



* Closure - escopo léxico
  * ES6 - 3 tipos de escopos

~~~javascript
//closure 1-closure.js

function init(){
    const exemplo = 'Essa variável';
    
    return function(){
        console.log(`1 - o valor da variável exemplo é: ${exemplo}.`);
        
        return function(){
        	console.log(`2 - o valor da variável exemplo é: ${exemplo}.`);
            
            return function(){
        	console.log(`3 - o valor da variável exemplo é: ${exemplo}.`);
			}
		}
    }
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

~~~



---

---



## Currying, Hoisting, Imutabilidade, Tipos e Variáveis



- **Currying** - técnica que transforma uma função de multiplos parametros, onde o primeiro sempre se repete em uma cadeia de de funções que recebe somente um parametro.

### Exemplo: 

~~~javascript
//Currying 1-currying.js
function soma(a){
    return function(b){
        return a + b;
    }
}
const soma2 = soma(2);

console.log(soma2(2)); // soma 2 + 2
console.log(soma2(3)); // soma 2 + 3
console.log(soma2(4)); // soma 2 + 4
~~~

* **Hoisting** - e o padrão do Java Script que move declarações de variáveis para o topo.
  * *obs.: no caso de funções toda a função é movida "elevada" para o topo.*

~~~javascript
function fn(){
    console.log(text); // msg = undefined.
    var text = "Exemplo"; // variável declara após o uso.
    console.log(text); // msg = Exemplo
}
fn();

/* como o Java Script interpreta:
function fn(){
	var text; // variável declarada mas não atribuida.
    console.log(text); // msg = undefined.
    text = "Exemplo"; // variável atribuida.
    console.log(text); // msg = Exemplo
}
*/

~~~

* **Imutabilidade** - Não alterar o objeto, array, etc. original, se cria um novo adicionando as propriedades desejadas.

~~~javascript
const user = {
    name:"Anderson",
    lastName:"Colin"
};
function getUserWithFullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName, user);
~~~

~~~javascript
const students = [
    {
     name: 'Grace',
        grade:7
    },
    {
     name: 'Jennifer',
        grade:4
    },
    {
     name: 'Paul',
        grade:10
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log(`\nLista de alunos:`);
console.log(students);
~~~

---

### Tipos e Variáveis

* var - variável global
* let - escopo de bloco
* const 



~~~javascript
//variaveis 1-variaveis.js

var nameVar = `Guilherme`;
let nameLet = `Guilherme`;
const nameConst = `Guilherme`;

console.log(`nameVar: ${nameVar}`);
console.log(`nameLet: ${nameLet}`);
console.log(`nameConst: ${nameConst}`);

~~~

~~~javascript
//variaveis 2-variaveis.js

//let respeita blocos
var test = 'example';

(() => {
    let test; 'valor função';
    console.log(`Valor dentro da função "${test}"`);
    
    if(true){
        let test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }
    console.log(`Valor após a execução do if "${test}"`);
})(); //função de execução imediata
~~~

~~~javascript
//variaveis 2-2-variaveis.js

//let e const respeitam blocos
(() => {
    let test; 'valor função';
    console.log(`Valor dentro da função "${test}"`);
    
    if(true){
        let test = 'valor de outro if';
        console.log(`Valor dentro de outro if "${test}"`);
    }
    if(true){
        const test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }
    console.log(`Valor após a execução do if "${test}"`);
})(); //função de execução imediata

~~~

~~~javascript
//variaveis 2-3-variaveis.js

//let e const respeitam blocos
(() => {
    const test; 'valor função';
    console.log(`Valor dentro da função "${test}"`);
    
    if(true){
        const test = 'valor de outro if';
        console.log(`Valor dentro de outro if "${test}"`);
    }
    console.log(`Valor após a execução do if "${test}"`);
})(); //função de execução imediata
~~~

~~~javascript
//variaveis 3-variaveis.js

const name = `Guilherme`;

name = `Guilherme`; //não podemos alterar o valor

const user = {
    name = `Guilherme`
};
// Mas se for um objeto, podemos trocar suas propriedades.
user.name = `Outro nome`; 

// Não podemos fazer o objeto "apontar" para outro lugar
user = {
    name: `Guilherme`
};

const persons = [`Guilherme`, `Pedro`, `Jennifer`];
// Podemos adicionar novos itens
persons.push(`João`);
// Podemos remover algum iten
persons.shift();
// Podemos alterar diretamente
persons[1](`James`);

console.log(`\nArray após alterações: `,persons);
~~~



## Tipos, Variáveis, operadores, condicionais e repetição em JavaScript ES6

----

#### Tipos e variáveis

* string
* Number
* boolean
* undefined
* symbol
* Object
* Function
* Array

​	

## Operadores

----

* Aritméticos
* Atribuição
* Comparação
* Condicional
* Lógicos
* Spread
