function successfullMessage(msg) {
    return "✅ *MalSara Bot*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *MalSara Bot*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *MalSara Bot*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}