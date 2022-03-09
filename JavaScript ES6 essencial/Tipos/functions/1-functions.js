function fn(){
    return 'code here';
}

const arrowFn = () => 'code here';

const arrowFn2 = () =>{
    //mais de uma expressão
    return 'code here';
}

//Funções também são objetos
fn.prop = "Posso criar propriedades";

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if(allowed){
        fnParam();
    }
}

const handFnExecution = controlFnExec(fn);

handFnExecution(true); //Executará a função fn
handFnExecution(); //Não executará a funão fn

// controlFnExec como função
function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}