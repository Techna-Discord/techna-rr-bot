# Reaction Roles - Configuring The Bot
 * [⬅️ Back to home menu](./../README.md)
Configuring the bot is rather easy, via the [config.json file](./../rrconfig.json). See the steps below to get help regarding that -

## Configuring Rolenames -
* To configure rolenames, head to the ``config.json`` file. From there, see the top group of settings, role1-role3. Collect your role names from your server that you would like to set as the reaction roles, and replace the text in the quotations with the role names. **Do not use IDs, the bot is not configured to allow those yet.**

## Configuring Reaction Emojis -
* To configure rolenames, head once again to the ``rrconfig.json`` file. The second group of settings, role1emoji-role3emoji, are the settings for the emojis. Collect the emoji names (select the emoji in your message bar, then put a ``\`` in front of it, and when you hit enter the emoji name/id for custom emojis will appear to be copied), and put them in the quotation marks. If you are only using default emojis, you can just copy and paste them in from the internet. I personally recommend [iEmoji](https://www.iemoji.com) for copy/paste default emojis.

## Configuring Embed Details -
* As Reaction Roles sends an embed and then reacts to said embed with the select emojis, you can easily configure the embed as you wish. Once again in the ``rrconfig.json`` file, the last group of settings, embedColor-rrChannel, are the embed settings. They have defaults already in place, however it is very easy to edit them! If you would like to add more to suit your needs, simply add a comma at the end of the last setting on the config file, then make another line, and follow the template for said settings. If you would like to skip the part of setting new config settings, you can also directly add the settings onto the embed in the [reactrole.js](./../commands/reactrole.js) file, under the MessageEmbed part, which is located at lines 22-25.

[➡️ Next Page - Reaction Role Commands](./rr-commands.md)