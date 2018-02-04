module.exports.run = async (bot, message, args) => {
    const v = require("../vars.js")

    const alias = v.fs.readFileSync(v.aliaspath, {"encoding": "utf-8"});
    message.author.send("Here is a list of all alias commands: :1234:\n\n" + alias)
    
    await message.author.send("Invite me to your server: ``" + v.botinvitelink + "``\nYou need help? English help and german chat: https://discord.gg/q3KXW2P");
    if (message.channel.type == "dm") {
        return;
    } else {
        await message.channel.send(v.randomstring(['A list of all aliases was send to you per DM. :mailbox_with_mail: :poop:','Ding! You have got an DM! :mailbox_with_mail: ','DM or Mail? I think DM is better. Here you go. :mailbox_with_mail: ','Here you go!','Have fun!','Spam is real!','Sorry, i did not spam you. Discord just does not let me post long messages.']))
    }
}

module.exports.config = {
    command: "alias",
    alias: "aliases"
}