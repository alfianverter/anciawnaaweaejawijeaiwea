const Discord = require("discord.js");
const music = new Discord.Client({disableEveryone: true});
music.commands = new Discord.Collection();
const {color} = require('./config.json');
const queue = new Map();

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


music.on('message', async message => {

    let prefix = 'mri!';
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
    let sender = message.author;

    if (!msg.startsWith(prefix)) return;
    if (sender.bot) return;
    
    try {
        let commandFile = require(`./commands/${cmd}.js`); 
        commandFile.run(music, message, args, color, queue); 
    } catch(e) { 
        console.log(e.message); 
    } finally { 
        console.log(`${message.author.username} ran the command: ${cmd} on ${message.guild.name}`);
    }
});

music.login(process.env.TOKEN);

music.on("ready", async () => {
function botStatus() {  
let status = [
`mri!join - mri!leave`,
`in ${music.guilds.size} server.`,
`24H active`,
`https://discord.gg/3pe7c6h`
  ];
  let rstatus = Math.floor(Math.random() * status.length);
  music.user.setActivity(status[rstatus], {Type: 'STREAMING', url:'https://www.twitch.tv/verterid'});
}; setInterval(botStatus, 10000)    
console.log("ready");
    console.log(`Logged in as : ${music.user.tag}`);
    console.log(`${music.user.username} is ready!`)
});
