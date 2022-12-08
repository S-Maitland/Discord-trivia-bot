// require('dotenv').config();
// const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require('discord.js');

// const prefix = "!";

// const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] })

// client.on("ready", () => {
//   console.log('Logged in as ${client.user.tag}!')

//   client.user.setActivity('Operational', {type: "Processing.."})
// })

// client.on("messageCreate", (message) => {
//     if(!message.content.startsWith(prefix) || message.author.bot) return;
    
//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     const messageArray = message.content.split(" ");
//     const argument = messageArray.slice(1);
//     const cmd = messageArray[0];

//     if (command === 'ping') {
//         message.channel.send("pong")
//     }
// })


// client.login(process.env.TOKEN);