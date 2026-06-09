class NotFound extends Error{
    constructor(){
        super("error, usuario no encotrado.")
    }
}

throw new NotFound
