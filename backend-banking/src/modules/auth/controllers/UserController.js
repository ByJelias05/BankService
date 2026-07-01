const { error } = require("winston");
const userDtoRes = require("../dto/UserDtoRes");
const { GetAllUsers, searchUserById, CreateUser } = require("../services/UsersServices/CreateUserService");
const userSchema = require("../validators/user.validation");

class userController{
    
    static async RegisterUser(req, res){

        const date = new Date();
        
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        }

        const DtoUser = new userDtoRes(user);

        //Validacion
        const validator = await userSchema.validate(DtoUser).then(data =>{
            // console.log("Creando...")
            const create = CreateUser(DtoUser);
            console.log(DtoUser)
            res.json({message: "Usuario creado", DtoUser})
        }, (error) =>{
            res.send(error.errors)
        })

    }

    static async updateProfile(req, res){

        const changes = req.body;

        const DtoUpdate = new userDtoRes(changes);

        const validate = await userSchema.validate(DtoUpdate).then(data =>{
            console.log(data)
            res.send(data)

        }, error => {
            console.log(error.errors)
            res.send("Validacion incompleta")

        })
        

    }

    static async getProfile(req, res){
        const id = req.body.id;
        const result = await searchUserById(id)
        res.json(result)
    }

    static async AllUsers(req, res){

        const dto = new userDtoRes(req.body)

        const AllUsers = await GetAllUsers();
        res.json(AllUsers)
    }

   
}

module.exports = userController;

