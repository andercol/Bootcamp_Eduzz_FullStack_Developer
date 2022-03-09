/*
Imutabilidade - Não aterar o objeto, array, etc. original, se cria um novo adicionando as propriedades desejadas.
*/

const user = {
    name:"Anderson",
    lastName:"Colin"
};
function getUserWithFullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName, user);