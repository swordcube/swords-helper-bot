const Discord = require('discord.js');
const { version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'help',
	description: "Brings up this message.",
	async execute(message, args){

		//start of code
		try {
		const msg = args.join(' ')

		const helpembed = new Discord.MessageEmbed()

			.setTitle("Help")
			.setDescription(`**These are the list of commands for Sword's Helper:**

			help - Brings up this message.
			ping - Tells you the ping of the bot.
			clap - Repeats what you say, but with claps in-between.
			echo - Repeats what you say.
			kill - Kills the person you @mention.
			kick - Kicks the person you @mention from the server.
			ban - Bans the person you @mention from the server.
			unban - Unbans the person you provide a user ID for from the server.
			purge - Purges/clears an amount of messages that you specify.
			reboot - Reboots/restarts the bot. (Only the bot owner can use this)

			**The bot is open source! Click the link below to make your own bot like mine!**
			Source code on GitHub: https://github.com/swordcube/swords-helper-bot
			`)
			.setFooter(`v${version} - Created by hexianimates / swordcube`, botLogo)
			.setThumbnail(botLogo)
			.setColor(embedcolor)

			message.channel.send(helpembed)
		}
		catch {
		
		};
		//end of code

	}
}