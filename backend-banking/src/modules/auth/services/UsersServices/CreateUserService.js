const IRepositoryUser = require("../../repositories/UserRepository");


const CreateUser = async(user) =>{

    const userCreated = await IRepositoryUser.CreateUser(user);
    return userCreated;
}

const GetAllUsers = async() =>{

    const extractUser = await IRepositoryUser.GetAll();
    return extractUser
}

const searchUserById = async(id) =>{
    
    const resultado = await IRepositoryUser.findById(id)
    console.log(resultado)
    return resultado
}

module.exports = {
    GetAllUsers,
    searchUserById,
    CreateUser
}