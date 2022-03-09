# Design Patterns

* :heavy_check_mark: Definição
* :heavy_check_mark: Tipos
* :heavy_check_mark: Patterns mais utilizados
----
## :heavy_check_mark: Definição:

Design Patterns ou padrões de projetos são soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser solucionado.

### Formato de um Pattern

* Nome
* Exemplo
* Contexto
* Problema
* Solução

##### Livro: Design Patterns: Elements of Reusable Object-Oriented Software

1994
Gang of four (GoF)
Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides

##### :heavy_check_mark: Tipos:

* Criação
* Estruturais
* Comportamentais

----

##### :heavy_check_mark: Padrões de criação

Os padrões de criação são aqueles que abstraem e/ou adiam o processo de criação dos objetos. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.

    * Abstract Factory
    * Builder
    * Factory Method
    * Prototype
    * Singleton

----

##### :heavy_check_mark: Padrões estruturais

Os padrões estruturais se preocupam com a forma como clases e objetos são compostos para formar estruturas maiores.

    * Adapter
    * Bridge
    * Composite
    * Decorator
    * Facade
    * Business Delegate
    * Flyweight
    * Proxy

----

##### :heavy_check_mark: Padrões comportamentais

Os padrões comportamentais se concentram nos algoritmos e atribuições de responsabilidade entre os objetos. Eles não descrevem apenas padrões de objetos ou classes, mas também os padrões de comunicação entre os objetos.

    * Chain of Responsibility
    * Command
    * Interpreter
    * Iterator
    * Mediator
    * Observer
    * State
    * Strategy
    * Template Method
    * Visitor

----

##### :heavy_check_mark: Padrões mais utilizados

    * Factory
    * Singleton
    * Decorator
    * Observer
    * Module

### __*Factory*__ 

    Todas as funções que retorna um objeto, sem a necessidade de chamá-las com o new, são consideradas funções Factory (Fábrica)

~~~javascript
function Pessoa(){
    return {
        name: 'Guilherme',
        lastName: 'Cabrini'
    }
}

const p = Pessoa();
console.log(p);


//---------------

function Pessoa(name){
    return {
        name,
        lastName: 'Cabrini'
    }
}

//---------------

function Pessoa(customProperties){
    return {
        name: 'Guilherme',
        lastName: 'Cabrini',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom Name', age: 27});
console.log(p);

~~~

----

### __*Singleton*__ 

    O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la.

~~~javascript
function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}

const p = Pessoa.call({ name:'Guilherme'});
const p2 = Pessoal.call({ name:'Custon Name'})

console.log(p);
console.log(p2);
~~~


----

### __*Decorator*__ 

    Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.

*Proposta:*
[https://github.com/tc39/proposal-decorators](https://github.com/tc39/proposal-decorators)

*TypeScript*
[https://www.typescriptlang/docs/handbook/decorators.html](https://www.typescriptlang/docs/handbook/decorators.html)

~~~javascript
let loggedIn = false;

function callifAuthenticated(fn){
    return !!loggedIn && fn();
}

function sum(a, b){
    return a + b;
}

console.log(callifAuthenticated(() => sum(2, 3)));
loggedIn = true;
console.log(callifAuthenticated(() => sum(2, 3)));
loggedIn = false;
console.log(callifAuthenticated(() => sum(2, 3)));
~~~


### __*Observer*__ 

    É um pattern muito popular em aplicações javascript. A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.

*Vue:*
[https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js#L229](https://github.com/vuejs/vue/blob/dev/src/core/observer/index.js#L229)

*RxJs:*
[https://rxjs-dev.firebaseapp.com/guide/observable](https://rxjs-dev.firebaseapp.com/guide/observable)

~~~javascript
class Observable {
    constructor(){
        this.observables = [];
    }

    subscribe(){
        this.observables.push();
    }

    notify(data){
        this.observables.forEach(fn =>(data));
    }

    unsubscribe(fn){
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');
~~~

### __*Module*__ 

    É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais.

*Criando a funcionalidade*
~~~javascript
// arquivo module.js

let name = 'default';

function getName(){
    retrun name;
}

function setName(newName){
    name = newName;
}

module.exports = {
    getName,
    setName
};

~~~

*Importando a funcionalidade*
~~~javascript
//arquivo module-import.js
const {getName, setName} = requiere('./module.js');

console.log(getName());
console.log(setName('Guilherme'));
console.log(getName());
~~~