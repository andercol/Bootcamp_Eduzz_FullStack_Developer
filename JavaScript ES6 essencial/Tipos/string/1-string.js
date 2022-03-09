
//retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//retorna um array quebrando a string por um delimitador
const splitTextSize = 'Texto'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador: `, splitTextSize );

// Busca por um valor e substitui por outro
const replacedText = `Texto`.replace('Text', 'txet');
console.log('\Substituição de valor: ', replacedText);

// Retorna a "fatia" de um valor
const lastChar = `Texto`.slice(-1);
console.log(`\nÚltima letra de uma string: `, lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log(`\nValor da string da primeira letra menos a última: `, allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log(`\nValor da string da segunda letra até última: `, secondToEnd);

// Retorna N caracter a partir de uma posição 
const twoCharsBeforeFirstPos = `Texto`.substring(0, 2);
console.log(`\nAs duas letras primeiras letras são: `, twoCharsBeforeFirstPos);