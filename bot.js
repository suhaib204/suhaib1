const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("682980395821826169")
setInterval(function() {
channel.send(`suhaib is king suhaib is king suhaib is king`);
}, 30)
})

client.login(process.env.BOT_TOKEN);