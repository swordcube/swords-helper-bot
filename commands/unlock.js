const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'unlock',
	description: "Unlocks the channel you run this command in.",
	async execute(message, args){

		//start of code
		try {

		// perm checking
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: You don't have permission to unlock this channel.");												
		if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: My role doesn't have permission to unlock this channel.");

		// lock the channel
		message.channel.overwritePermissions([
		  {
		     id: message.guild.roles.everyone.id,
		     allow: ['SEND_MESSAGES'],
		  },
		]);

		const unlockembed = new Discord.MessageEmbed()

			.setTitle("Unlocked")
			.setDescription(`${message.channel} has been unlocked.`)
			.setFooter(`v${version} - Created by hexianimates / swordcube`, botLogo)
			.setColor(embedcolor)

			message.channel.send(unlockembed)
		}
		catch {
		
		};
		//end of code

	}
}