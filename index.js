const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("ready", function (){
    console.log(somebot)
});

bot.login(process.env.token)