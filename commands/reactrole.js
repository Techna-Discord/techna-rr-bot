// declare variables
const Discord = require('discord.js');
const config = require('./../rrconfig.json');

// connect to command handler + execute command
module.exports = {
    name: 'rr',
    description: 'setup a rr embed',
    async execute (client, message, args) {

        // declare role/channel/emoji variables from config.json file
        const channel = config.rrChannel;
        const role1 = message.guild.roles.cache.find(role => role.name === config.role1);
        const role2 = message.guild.roles.cache.find(role => role.name === config.role2);
        const role3 = message.guild.roles.cache.find(role => role.name === config.role3);

        const role1emoji = config.role1emoji;
        const role2emoji = config.role2emoji;
        const role3emoji = config.role3emoji;

        // create the embed which will appear in the channel via the embed settings in config.json
        let rrEmbed = new Discord.MessageEmbed()
            .setColor(config.embedColor)
            .setTitle(config.embedTitle)
            .setDescription(config.embedDescription)
        let rrAwaitEmbed = await message.channel.send(rrEmbed);
        rrAwaitEmbed.react(role1emoji);
        rrAwaitEmbed.react(role2emoji);
        rrAwaitEmbed.react(role3emoji);

        // give roles on reaction
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === role1emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role1);
                }
                if (reaction.emoji.name === role2emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role2);
                }
                if (reaction.emoji.name === role3emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role3);
                }
            } else {
                return;
            }
        });

        // remove roles on reaction removal
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === role1emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
                }
                if (reaction.emoji.name === role2emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role2);
                }
                if (reaction.emoji.name === role3emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role3);
                }
            } else {
                return;
            }
        });
    }
}
