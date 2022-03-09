let lines = gets().split("\n");

let num = parseInt(lines.shift());

let init = num % 2 === 0 ? num + 1 : num;

console.log(num);
console.log("init", init);
console.log(num);
for ( var i=0; i<6; i++ ) {
 
      if(num % 2 === 0){
        num++;
      }else {
        console.log(num);
        num++
      }
      //Escreva a sua lógica aqui

}