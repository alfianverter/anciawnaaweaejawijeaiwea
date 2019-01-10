const cfg = require("../config.json");
const Discord = require('discord.js');
const key = process.env.YT_API;
const fs = require("fs");
const moment = require("moment");
const ytdl = require("ytdl-core");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(key);
const opus = require("opusscript");
const gyp = require("node-gyp");

exports.run = async(music, message, args, color, queue) => {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
                    .then(connection => { 
    console.log("joined channel");
       //     const stream = ytdl('https://www.youtube.com/watch?v=oI3GdbsbDxk', { filter : 'audioonly' });
        //    const dispatcher = connection.playStream(stream);

      	const dispatcher = connection.playStream(ytdl(`https://www.youtube.com/watch?v=1QQlUah25UI`))
        	connection.dispatcher.setVolumeLogarithmic(1);
    message.channel.send({embed: new Discord.RichEmbed()
                    .setAuthor(message.author.tag,message.author.avatarURL)
                    .setDescription(`Music Radio Indo, Joined Your Voice channel <a:a:532595746638397440>`)
.setColor("RANDOM")
                   })

        

  })
    }}

exports.help = {
    name: "play",
    description: "Sings music to you",
    usage: "ms!play [song-name] || [url] || [playlist-url]"
}
