
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