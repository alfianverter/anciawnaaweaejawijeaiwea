const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let patrick = new Discord.RichEmbed()
.setAuthor('Music Radio Indo', bot.user.avatarURL)
.addField(`
mri!join = Join Your Voice channel
mri!leave = Leave Your Voice Channel
mri!invite = Invite bot to the guild`, '---=---=---=---=---=---=---=---=---', true)
.setColor("RANDOM")
  .setThumbnail(bicon)
message.channel.send(patrick);
}

exports.help = {
  name: "help"
}
