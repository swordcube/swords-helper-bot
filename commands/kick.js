module.exports = {
	name: 'kick',
	description: "Kicks the person you @mention from the server.",
	execute(message, args){

		//start of code
		const msg = args.join(' ')

		const { prefix, version, botLogo, embedcolor } = require('../config.json')		
		
		const Discord = require('discord.js');
		const { member, mentions } = message

		if (

			member.hasPermission('ADMINISTRATOR') ||
			member.hasPermission('KICK_MEMBERS')

		) {
			// kick logic
			const target = mentions.users.first()

			if (target) {
					const targetMember = message.guild.members.cache.get(target.id)
					targetMember.kick()

					const kickembed = new Discord.MessageEmbed()

						.setTitle("Kicked")
						.setDescription(`<@${target.id}> has been kicked.`)
						.setFooter(`v${version} - Created by hexianimates / swordcube`, botLogo)
						.setColor(embedcolor)

					message.channel.send(kickembed)
			} else {
				message.channel.send(`:x: You can't kick yourself.`)
			}
		} else {
			message.channel.send(`:x: You don't have the permissions to use this command.`)
		};
		//end of code

	}
}