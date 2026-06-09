const userController = require("../controllers/UserController");

const RouteUser = require("express").Router();

// RouteUser.post("/createUser", userController.createUser)
RouteUser.post("/SearchUser", userController.BuscarUsuario)


module.exports = RouteUser