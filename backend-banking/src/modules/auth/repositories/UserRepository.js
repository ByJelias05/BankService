const {Pool} = require("pg")
const db = require("../../../database/models")

class IRepositoryUser{
    
    static async findById(id){
        
        const res = await db.User.findByPk(id)
        console.log(res)
        return res
    }
}

module.exports = IRepositoryUser