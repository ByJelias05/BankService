const db = require("../../../database/models/")

class IRepositoryUser{

    static async CreateUser(user){

        const userCreated = db.User.create(user);
        console.log(userCreated)
        return userCreated;
    }

    static async GetAll(){
        const users = await db.User.findAll();
        console.log(users)
        return users;
    }
    
    static async findById(id){
        
        const res = await db.User.findByPk(id)
        console.log(res)
        return res
    }
}

module.exports = IRepositoryUser