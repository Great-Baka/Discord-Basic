const DiscordJS = require('discord.js');
const { Client, Intents} = require('discord.js');
const dontenv = require('dotenv');
dontenv.config();


const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
})


client.on('ready', async () => {
    console.log('Yawns *stretches*..... I dont want to wake up just yet')
})

client.on('messageCreate', (message) => {
    if(message.author.bot) return;

    if (message.content === '!ping' || message.content === '! ping') {
    //    message.reply('Pong!')
       message.channel.send('Pong!')
    }
})

client.login(process.env.TOKEN)
