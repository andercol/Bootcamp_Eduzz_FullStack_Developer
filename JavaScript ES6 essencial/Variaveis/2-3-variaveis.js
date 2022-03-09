
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