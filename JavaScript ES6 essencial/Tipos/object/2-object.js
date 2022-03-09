const user = {
    name: 'Anderson',
    lastName: 'Colin'
};

// Recuperar as chavs do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recuperar os valores das chavs do objeto
console.log('\nValores das Propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de Propriedades e valores:', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fulName:'Anderson Colin'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\Retorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age:26}));

// Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

// Permite alteração apenas das propriedades existente em um objeto
const person = {name: 'Anderson'};
Object.seal(person);

person.name = "Josue";
delete person.name;
person.age = 42;

console.log('\nVariável person após as alterações', person);