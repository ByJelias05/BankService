const fs = require("fs")
const GenerateFileName = require("../utils/GenerateFileName");
const { DATE } = require("sequelize");


class LogService{

    static CreateLog(){
        const fileName = GenerateFileName();
        fs.writeFileSync(fileName, "Initialized banking process \n")
        console.log(__dirname)
    }

    static AddLog(type, level, message){

        const fecha = new Date

        const ExtractName = GenerateFileName();
        const NewLine = `[${fecha.toISOString()}] - [${type}] - [${level}]  [${message}] \n`
        fs.appendFileSync(ExtractName, NewLine)
    }
}

LogService.CreateLog();
LogService.AddLog("SUCCESS", "MENOR", "USUARIO AUTENTICADO CON EXITOS");