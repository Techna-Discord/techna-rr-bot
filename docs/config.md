# Reaction Roles - Configuring The Bot
 * [⬅️ Back to home menu](./../README.md)
Configuring the bot is rather easy, via the [rrconfig.json file](./../rrconfig.json). See the steps below to get help regarding that -

## Configuring Rolenames -
* To configure rolenames, head to the ``rrconfig.json`` file. From there, see the top group of settings, role1-role3. Collect your role names from your server that you would like to set as the reaction roles, and replace the text in the quotations with the role names. **Do not use IDs, the bot is not configured to allow those yet.**

## Configuring Reaction Emojis -
* To configure rolenames, head once again to the ``rrconfig.json`` file. The second group of settings, role1emoji-role3emoji, are the settings for the emojis. Collect the emoji names (select the emoji in your message bar, then put a ``\`` in front of it, and when you hit enter the emoji name/id for custom emojis will appear to be copied), and put them in the quotation marks. If you are only using default emojis, you can just copy and paste them in from the internet. I personally recommend [iEmoji](https://www.iemoji.com) for copy/paste default emojis.

## Configuring Embed Details -
* As Reaction Roles sends an embed and then reacts to said embed with the select emojis, you can easily configure the embed as you wish. Once again in the ``rrconfig.json`` file, the last group of settings, embedColor-rrChannel, are the embed settings. They have defaults already in place, however it is very easy to edit them! If you would like to add more to suit your needs, simply add a comma at the end of the last setting on the config file, then make another line, and follow the template for said settings. If you would like to skip the part of setting new config settings, you can also directly add the settings onto the embed in the [reactrole.js](./../commands/reactrole.js) file, under the MessageEmbed part, which is located at lines 22-25.

## Adding Extra Reaction Roles -
* This bot is designed to send reaction roles in embeds, and gives roles that way. Due to this, the main ``reactrole.js`` file is designed to not be changed. If you wish to add more embeds/reaction roles, simply create a second copy of ``rrconfig.json`` called whatever you wish, copy the contents of the ``reactrole.js``  into a second file called ``<your_file_name_here>.js``, change the command name under line 7 to any name of your choice, and change the rrconfig requirement on line 3 to ``./../<your_file_name_here>.json``. From there, simply fill in the config settings on your second file as necessary, and go from there! Running the command for the second reaction role command will send the embed separately.

[➡️ Next Page - Reaction Role Commands](./rr-commands.md)
