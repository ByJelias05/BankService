
class userDtoRes{

    constructor(data){
        this.firstName = data.firstName ? data.firstName : '';
        this.lastName = data.lastName ? data.lastName : '';
        this.email = data.email.includes("@") ? data.email : null;
        this.password = data.password ? data.password : '';
    }

}

module.exports = userDtoRes