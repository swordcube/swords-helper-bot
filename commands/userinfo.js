const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'userinfo',
	description: "Brings up the info of a mentioned user.",
	async execute(message, args){

		//start of code
		try {
		const { guild, channel } = message

		const user = message.mentions.user.first() || message.member.user
		const member = guild.members.cache.get(user.id)

		

		const userembed = new Discord.MessageEmbed()

			.setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
			.setColor(embedcolor)

			channel.send(userembed)
		}
		catch(err) {
			message.channel.send(err)
		};
		//end of code

	}
}