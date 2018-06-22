module.exports.run = async (bot, message, args) => {
    const v = require("../vars.js")

    if (message.channel.type === "dm") {
        message.channel.send(v.dmerror())
        return;    
    }

    let text = args.slice(0).join(" ");
    if (text === "") {
        message.channel.send("Please define what i should say!").catch(err => {
            console.log("say send message error: " + err)
        })
        return;
    }
    message.delete().catch(err => {
        message.channel.send("Delete command message error: " + err).catch(err => {
            console.log("say delete command send error message error: " + err)
        })
    });
    message.channel.send(text).catch(err => {
        console.log("say send message error: " + err)
    })

}

module.exports.config = {
    command: "say"
}