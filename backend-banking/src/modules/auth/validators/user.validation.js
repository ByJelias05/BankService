const yup = require("yup")

const userSchema = new yup.ObjectSchema({
    firstName: 
    yup.string()
    .required("El campo firstName es requerido")
    .max(20, "El nombre no puede ser tan largo"),

    lastName:
    yup.string()
    .required("El campo lastName es requerido")
    .max(20, "El apellido no puede ser tan largo"),

    email: 
    yup.string()
    .required("El campo email es requerido")
    .email("Ingrese un correo valido"),

    password:
    yup.string()
    .required("El campo contraseña es requerido")
    .min(5, "La contrasñea debe tener un minimo de 5 digitos.")
})

module.exports = userSchema;

