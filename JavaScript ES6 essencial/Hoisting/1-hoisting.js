/* 
Hoisting - e o padrão do Java Script que move declarações de variáveis para o topo.
obs.: no caso de funções toda a função é movida "elevada" para o topo. 
*/

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