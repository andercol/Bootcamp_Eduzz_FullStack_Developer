function getName(){
    return 'Guilherme Cabrini';
}
function logFn(fn){
    console.log(fn());
}
const logFnResult = logFn;

logFnResult(getName);