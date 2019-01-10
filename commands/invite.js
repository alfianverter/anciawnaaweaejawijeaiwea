const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let patrick = new Discord.RichEmbed()
.setDescription(`
[\`click this to invite the bot\`](https://discordapp.com/oauth2/authorize?client_id=532862039740121098&permissions=8&scope=bot)`, '---=---=---=---=---=---=---=---=---', true)
.setColor("RANDOM")
  .setThumbnail(bicon)
message.channel.send(patrick);
}

exports.help = {
  name: "help"
}
