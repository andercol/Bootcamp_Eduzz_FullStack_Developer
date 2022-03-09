# Orientção a objetos e Design Patterns a linguagem ES6

## Introdução a orientação a objetos

:heavy_check_mark: Herança
:heavy_check_mark: Classes
:heavy_check_mark: Modificadores de acesso
:heavy_check_mark: Encapsulamento
:heavy_check_mark: Static

----
## :heavy_check_mark: Herança
* baseada em protótipos
* prototype
* `__proto__`

~~~javascript

'use strict';

const myText = 'Hello prototype!';

myText.split(''); // <-- de onde vem esse "split"?

/** ao declarar ua string estamos utilizando uma função contstrutora que tem um protptype atrelado a ela que por sua vez tem um __proto__ atrelado*/

console.log(myText.__proto__.split);
// *f* split() { [ native code ]}

console.log(myText.__proto__.split === String.prototype.split);
// true

console.log(myText.constructor === String);
// true

//__proto__ -> prototype -> constructor
// proto aponta para o prototype que é criado apartir de um constructor.

~~~~

~~~javascript

const myText = 'Hello prototype!';
/*
myText.constructor -> String
myText.__proto__ -> String.prototype
*/
~~~

Se eu criar uma função Animal, que será o constructor dela?
~~~javascript

'use strict';
function Animal(){}

console.log(Animal.constructor);
// *f* Function() { [ native code ]}
// Se eu logar essa função sera informado o "Function" como construtor.
~~~
Estrutura de um função:
<img src="function_prototype.png" style="zoom:50%;" />

O que é o operador "new" de uma função construtora?:
<img src="newAnimal.png" style="zoom:50%;" />

<img src="newFoo.png" style="zoom:50%;" />


----

## :heavy_check_mark: Classes

* ES6
* simplicação da herança de protótipos
* palavra chave *class*

Exemplo function animal no formato ES6 "class":
<img src="explo_class.png" style="zoom:50%;" />
Por baixo dos panos a *Class* faz exatamente como o exemplo da function.

Incluíndo a função "latir"
<img src="explo_class2.png" style="zoom:50%;" />
----

### :heavy_check_mark: Modificadores de acesso.

* privado
* público

* *ainda não tem suporte nos browsers
Modificadores em funções anterior ao ES6

    <img src="modificadores.png" style="zoom:50%;" />

Modificadores em class Node apartir v.12
<img src="modificadores_class.png" style="zoom:50%;" />
"#" é o modificar de acesso


----

### :heavy_check_mark: Encapsulamento.

* serve para ocultar detalhes do funcionamento interno

<img src="encapsulamento.png" style="zoom:50%;" />

* Static - Permite acessar métodos / atributos sem instanciar

<img src="static.png" style="zoom:50%;" />

## Introdução a Design Patterns

