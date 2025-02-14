const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'lock',
	description: "Locks the channel you run this command in.",
	async execute(message, args){

		//start of code
		try {

		// perm checking
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: You don't have permission to lock this channel.");												
		if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: My role doesn't have permission to lock this channel.");

		// lock the channel
		message.channel.overwritePermissions([
		  {
		     id: message.guild.roles.everyone.id,
		     deny: ['SEND_MESSAGES'],
		  },
		]);

		const lockembed = new Discord.MessageEmbed()

			.setTitle("Locked")
			.setDescription(`${message.channel} has been locked.`)
			.setFooter(`v${version} - Created by hexianimates / swordcube`, botLogo)
			.setColor("#B20000")

			message.channel.send(lockembed)
		}
		catch {
		
		};
		//end of code

	}
}