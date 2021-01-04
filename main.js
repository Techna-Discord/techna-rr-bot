// declare variables
const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});

// command handler
client.commands = new Map()

fs.readdirSync(__dirname + '/commands').forEach(file => {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
})

client.on('message', message => {
    if (!message.guild) return;
    let prefix = config.prefix

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ =/)
    const commandName = args.shift().toLowerCase()
    if (!client.commands.has(commandName)) return;

    client.commands.get(commandName).execute(client, message, args)
});

// ready/set status
client.on('ready', () => {
    client.user.setStatus('idle');
    client.user.setActivity('for reactions!', { type: 'WATCHING' });
})

client.login(config.token)