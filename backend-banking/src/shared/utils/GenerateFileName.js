const { saveRepository, GenerateId } = require("../constants/configs");


const GenerateFileName = () =>{
    const fileName = saveRepository.Logs + `${GenerateId.IdBank}.log`;
    return fileName
}

module.exports = GenerateFileName