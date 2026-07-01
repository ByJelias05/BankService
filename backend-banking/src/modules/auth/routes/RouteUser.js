const userController = require("../controllers/UserController");

const RouteUser = require("express").Router();

RouteUser.post("/registerUser", userController.RegisterUser)
RouteUser.put("/updateProfile", userController.updateProfile)
RouteUser.post("/getProfile", userController.getProfile)

//RouteUser.get("/AllUsers", userController.AllUsers)


module.exports = RouteUser