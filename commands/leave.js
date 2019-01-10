const cfg = require("../config.json");
const Discord = require("discord.js");
const key = process.env.YT_API;
const fs = require("fs"); 
const moment = require('moment');
const yt = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(key);
const opus = require("opusscript");
const gyp = require("node-gyp");

exports.run = async(music, message, args, color,  queue) => { 
         if (message.member.voiceChannel) {
            message.delete(0);
            message.member.voiceChannel.leave();
            console.log("left a channel");
    message.channel.send({embed: new Discord.RichEmbed()
                    .setAuthor(message.author.tag,message.author.avatarURL)
                    .setDescription(`Leave your voice channel <:test:532594980347183134>`)
.setColor("RANDOM")
                   })
        } else {    }
    }

exports.help = {
    name: "stop",
    description: "Stops the music playing and removes all the songs from the queue",
    usage: "pr!stop",
    note: "Removes all the song from the queue"
}
