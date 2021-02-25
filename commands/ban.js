module.exports = {
	name: 'ban',
	description: "Bans the person you @mention from the server.",
	execute(message, args){

		//start of code
		const msg = args.join(' ')

		const { prefix, version, botLogo, embedcolor } = require('../config.json')

		const Discord = require('discord.js');
		const { member, mentions } = message

		if (

			member.hasPermission('ADMINISTRATOR') ||
			member.hasPermission('BAN_MEMBERS')

		) {
			// ban logic
			const target = mentions.users.first()

			if (target) {
					const targetMember = message.guild.members.cache.get(target.id)
					targetMember.ban()

					const banembed = new Discord.MessageEmbed()

						.setTitle("Banned")
						.setDescription(`<@${target.id}> has been banned.`)
						.setFooter(`v${version} - Created by hexianimates / swordcube`, botLogo)
						.setColor(embedcolor)

					message.channel.send(banembed)
			} else {
				message.channel.send(`:x: You can't ban yourself.`)
			}
		} else {
			message.channel.send(`:x: You don't have the permissions to use this command.`)
		};
		//end of code

	}
}