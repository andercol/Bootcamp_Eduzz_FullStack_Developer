let user = {
    name: 'Anderson'
};

// Alterando a propriedade de um objeto
user.name = "João";
user('name') = "Alex";

const prop = 'name';
user[prop] = 'Outro nome';

// Criando uma propriedade 
user.lastname = 'Colin';

// Deletanto uma propriedade
delete user.name;