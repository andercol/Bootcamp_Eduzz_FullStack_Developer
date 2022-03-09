# Tratamento e Exceções



## Como identificar erros

Utilizar bloco try catch

extender a classe error e 



~~~javascript
try{
    console.log(name);
    const name = 'Celso Henrique';
    const myError = new Error('Custom message');
    throw myError;
}catch (err){
    console.log('Error: ', err);
}finaly {
    console.log('Keep going...');
}
~~~



~~~javascript
class CustomError extends Error{
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}

try{
    console.log(name);
    const name = 'Celso Henrique';
    const myError = new CustomError({
        message: 'Custom Message on custom error',
        data: {
        	type: 'Server error'
           }
    });
    
    throw myError;
}catch (err){
    console.log(err);
    console.log(err.data);
    if (err.data.type === 'Server error'){
    ...
    } else{
        ...
    }
}finaly {
    console.log('Keep going...');
}
~~~



#### *Debugging part 1*



#### *Debugging part 2*

