const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'userinfo',
	description: "Brings up the info of a mentioned user.",
	async execute(message, args){

		//start of code
		try {
		const { guild, channel } = message
				
		const user = message.mentions.users.first() || message.member.user
		const member = guild.members.cache.get(user.id)


		const msg = args.join(' ')

		const userembed = new Discord.MessageEmbed()

			.setTitle("User Info")
			.setDescription(`**yes:**

test 123`)
			.setFooter(`User info for ${user.username} | v${version} - Created by hexianimates / swordcube`, user.displayAvatarURL())
			.setColor(embedcolor)

			message.channel.send(userembed)
		}
		catch {
		
		};
		//end of code

	}
}