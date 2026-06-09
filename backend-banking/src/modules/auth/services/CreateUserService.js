const IRepositoryUser = require("../repositories/UserRepository")


const SearchUser = async(id) =>{
    
    const resultado = await IRepositoryUser.findById(id)
    console.log(resultado)
    return resultado
}

module.exports = SearchUser