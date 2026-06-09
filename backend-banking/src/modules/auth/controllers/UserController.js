const SearchUser = require("../services/CreateUserService");


module.exports = class userController{

    static createUser(req, res){
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const correo = req.body.correo;
        const contraseña = req.body.contraseña;

        res.send(`El nombre ${nombre} `)
    }

    static async BuscarUsuario(req, res){
        const id = req.body.id;
        const result = await SearchUser(id)
        res.json(result)
    }
}
