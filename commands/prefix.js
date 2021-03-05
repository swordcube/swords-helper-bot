const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'prefix',
	description: "Allows you to change the prefix of the bot for your server.",
	async execute(message, args){

		//start of code
		try {
			if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(":x: You don't have the permissions to change the server prefix.");
			if(!args[0]) return message.channel.send(":x: You didn't tell me what to change the prefix to.");


			await db.set(`prefix_${message.guild.id}`, args[0])			

			const embed = new Discord.MessageEmbed()

			.setTitle("Prefix")
			.setDescription(`**The prefix for this server is now:**
${args[0]}
			`)
			.setFooter(`v${version} - Created by hexianimates / swordcube`, botLogo)
			.setThumbnail(botLogo)
			.setColor(embedcolor)

			message.channel.send(embed)

			// message.channel.send(":x: This command might work in the future lol")
		}
		catch {

		};
		//end of code

	}
}