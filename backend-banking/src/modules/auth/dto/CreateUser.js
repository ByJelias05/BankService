

module.exports = class DtoCreateUser{

    constructor(data){

        this.name = data.nombre ? data.nombre.trim() : '';
        this.lastName = data.apellido ? data.apellido.trim() : '';
        this.email = data.correo ? data.correo.toLowerCase() : '';
        this.password = data.contraseña.length > 8 ? data.contraseña : '';
        this.IsActive = true;

    }
}