function successfullMessage(msg) {
    return "β *MalSara Bot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *MalSara Bot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *MalSara Bot*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}