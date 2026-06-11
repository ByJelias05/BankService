const { randomUUID } = require("crypto")

const saveRepository = {
    Logs: "C:\\Users\\garci\\Desktop\\NodeJs\\BankService\\backend-banking\\src\\shared\\logger\\Logs\\"
}

const GenerateId = {
    IdBank: randomUUID()
}

module.exports = {
    saveRepository,
    GenerateId
}