# Aplicando conceitos Promises e Fetch



## Callbacks e Promises

	#### Callbacks

Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

### Promises

**`Promise`** é um objeto usado para processamento assíncrono. Um `Promise` (*de "promessa"*) representa um valor que pode estar disponível agora, no futuro ou nunca.

Uma `**Promise**` representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma *promessa* ao valor em algum momento no futuro.

Um **`Promise`** está em um destes estados: 

- *pending (*pendente*)*: Estado inicial, que não foi realizada nem rejeitada.
- *fulfilled (*realizada): sucesso na operação.
- *rejected (*rejeitado):  falha na operação.

~~~javascript
//Promises

const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
      // did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) =>{
    setTimeout(function(){
      // did something
        callbak('Second data');
    }, 1000);
});

console.log(doSomethingPromise);
doSomethingPromise.then(data => console.log(data));
doSomethingPromise
    .then(data => console.log(data))
    .catch(error => console.log(error));

// invocando uma nova Promise após conclusão da primeira
doSomethingPromise
    .then(data => doOtherThingPromise)
	.then(data2 => console.log(data2))
    .catch(error => console.log('Ops', error));

doSomethingPromise
    .then(data => { 
    	console.log(data.split('')); 
    	return doOtherThingPromise;})
	.then(data2 => console.log(data2.split('')));

/***executando as duas em paralelo****/
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => { 
    console.log('Ops', err);
});

/***A que for resolvida primeiro é retornada****/
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
})

/* - Status Promise
	Pending - está pendente em execução
	Fullfilled - terminou de executar
	Rejected - apresentou erro
*/




//Callbacks
function doSomething(callback){
    setTimeout(function(){
        // did something
        callbak('First data');
    }, 1000);
}

function doOtherThing(callback){
    setTimeout(function(){
      // did something
        callbak('Second data');
    }, 1000);
}

function doAll(){
    try{
    doSomething(function(data){
        var processedData = data.split('');
        try{
    	doOtherThing(function(data2){
        	var processedData = data2.split('');
            try{
            setTimeout(function(){
            	console.log(processedData, processedData2);    
            }, 1000);
            }catch(err){
                // handle error
            }
   		 });
       }catch(err){
           // handle error
       }     
  });
  }catch(err){
   // handle error
  }
}

doAll();
~~~



## Fetch, Async / Await e EventEmitter



#### Fetch

A [API Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global [`fetch()` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/fetch) que fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.

Este tipo de funcionalidade era obtida anteriormente utilizando [`XMLHttpRequest`](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest). Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras tecnologias como [`Service Workers` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API). Fetch também provê um lugar lógico único para definir outros conceitos relacionados ao protocolo HTTP como CORS e extensões ao HTTP.

Referência: *[Usando Fetch - APIs da Web | MDN (mozilla.org)](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)*

~~~javascript
//API Fetch
//https://localhost:8080/data.json

fetch('https://localhost:8080/data.json')
    .then(responseStream => {
    console.log(responseStream);
    return responseStream.json()
        .then(data =>{
        console.log(data); 
    });
});


fetch('https://localhost:8080/data.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json();
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
        console.log(data);
    })
    .cath(err => {
        console.log('Error: ', err);
    });

~~~



----

#### Async / Await 

	##### Async

Em primeiro lugar, temos a palavra-chave `async`, que você coloca antes de uma declaração de função para transformá-la em uma função assíncrona. Uma [função assíncrona](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function) é uma função que espera a possibilidade de a palavra-chave await ser usada para invocar código assíncrono.

Então a palavra-chave `async` é adicionada nas funções para dizer a elas para retornar uma promise ao invés de diretamente retornar uma valor.

~~~javascript
// ES7 - Async / Await

//ao colocar a palavra "Async" ante de qualquer função transforma a função em uma promise
const simpleFunc = async () => {
    return 12345;
}
console.log(simpleFunc());

//recebendo o retorno da função com then
const simpleFunc = async () => {
    return 12345;
}
simpleFunc()
.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
~~~



	##### Await

A vantagem de uma função assíncrona só se torna aparente quando você a combina com a palavra-chave [await](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await). `await` só funciona dentro de funções assíncronas no código JavaScript regular, no entanto, pode ser usado por conta própria com [JavaScript modules.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules)

`await` pode ser colocado na frente de qualquer função assíncrona baseada em promise para pausar seu código nessa linha até que a promise seja resolvida e, em seguida, retornar o valor resultante.

Você pode usar `await` quando chamar qualquer função que retorne uma Promise, incluindo funções de API web.

~~~javascript

// Combinando Async + Await

const asyncTimer = () => Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await 				    	fetch('data.json').then(resStream.json());
    return dataJSON;
}
simpleFunc()
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
~~~



##### EventEmitter

EventEmitter é uma classe em node.js que é responsável por lidar com os eventos criados usando o módulo 'eventos' no nó.js. Eventos são criados para fazer operações personalizadas enquanto um conjunto de operações é realizado. EventEmitter pode retornar duas propriedades, ou seja*, newListener* se quisermos criar um novo ouvinte de eventos e *remover OListener* quando quisermos remover os ouvintes de eventos existentes. Ambas as propriedades mencionadas emitem um evento sempre que chamadas para realizar a operação.

Para realizar operações no EventEmitter, precisamos criar uma referência usando o módulo 'eventos' e, em seguida, precisamos inicializar uma instância do EventEmitter para que possamos usá-lo ainda mais.



~~~javascript
// EventEmitter (explusivo do NojeJS)

const EventEmitter = require('events');
const { emit } = require('process');

const emitter = new EventEmitter;

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', { user: 'Celso Henrique'});

///-------


const EventEmitter = require('events');

class Users extends EventEmitter{
    userLogged(data){
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Celson Henrique'});
~~~

