# Desenvolvimento avançado com JavaScript ES6
## Funções avançadas do ES6

1. Arrow Functions - como utilizar ao seu favor no dia a dia.
2. Default Functions Arguments 
3. Enhanced Object Literals - O que o ES6 (EcmaScript 6) trouxe de novidades e melhorias aos Objetos literarios do JavaScript.

---

### 1. Arrow Functions - como utilizar ao seu favor no dia a dia.



### 2. Default Functions Arguments

No Java Script quando não passamos um valor para uma função o valor padrão é "undefined". Após o ES6 podemos definir um valor padrão caso o usuário não informe algum parâmetro ou passe "undefined".

~~~javascript
function multiply(a, b){
   	return a * b; // a = 5 e b = undefined
}
console.log(5); // ira retornar "NaN" pois o segundo parametro não foi informado.
~~~

~~~javascript
/* Antigamente se utilizava*/
unction multiply(a, b){
    b = b || 1;	// a = 5 e b = 1 O parametro "0" é convertido para falso. na validação.
   	return a * b; 
}
console.log(5, 0); // ira retornar "NaN" pois o parametro "0" é convertido para falso.
~~~

~~~javascript
/* Outra opção*/
unction multiply(a, b){
    b = typeof b === 'undefined' ? 1 : b;	// se B for undefined retorna 1 do contrario retorna o valor de b, podendo ser 0.
   	return a * b; 
}
console.log(5, 0);
~~~

*Lazy evaluation*

	uma função que só executada quando não passamos um dos parametros.

~~~javascript
//lazy evaluation
function randomNumber(){
	console.log('Generating a random number...');
	return Math.random() * 10;
}
function multiply(a, b = randomNumber()){
	return a * b;
}
console.log(multiply(5)); //ira executar 5 * o retorno da função randomNumber
console.log(multiply(5,5)); //ira executar 5*5
~~~

### *Default Function Arguments*

	Nesta tecnica é definido o valor padrão junto com os argumentos esperados.

~~~javascript
//Default Function Arguments
function multiply(a, b = 1){
	return a * b;
}
console.log(multiply(5));		//retorna 5, segundo parametro asume o default 1
console.log(multiply(5,0));	//retorna 0
console.log(multiply(5,5));	//retorna 25

~~~

~~~javascript
//Default Function Arguments

function randomNumber(){
	return Math.random() * 10;
}
function multiply(a, b = randomNumber()){
	return a * b;
}
console.log(multiply(5));	//caso não informado randomNumber() ira gerar um valor aleatorio

~~~



---

### 3. Enhanced (aprimoramentos) Object Literals



~~~javascript
//como eram declarados os objetos literais antes do ES6
// 1º forma
var obj = {
    prop1: 'Digital Innovation One'
};
console.log(obj);

// 2º forma
var prop1: 'Digital Innovation One'
var obj = {
    prop1: = prop1
};
console.log(obj);
~~~

*Melhorias do ES6* 

~~~javascript
// Shorthand == codificação de abreviação
var prop1: 'Digital Innovation One'
var obj = {
    prop1 // não é necessário repetir a palavra
};
console.log(obj);

// também pode ser utilizado para funções
function method1(){
    console.log('method called');
}
var obj = {
    method1 
};
obj.method1();

// também pode ser utilizado para funções
var obj = {
    sum: function sum(a, b){
    return a+ b;
	} 
};
console.log(obj.sum(1, 5));

// também pode ser utilizado omitindo a palavra function
var obj = {
    sum(a, b){
    return a+ b;
	} 
};
console.log(obj.sum(1, 5));
~~~

