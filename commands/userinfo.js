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
			.addFields(
			{
				name: 'User Tag',
				value: user.tag,
			},

			{
				name: 'Is Bot',
				value: user.bot,		
			},

			{
				name: 'Nickname',
				value: member.nickname || 'None',
			},

			{
				name: 'Server Join Date',
				value: new Date(member.joinedTimestamp).toLocaleDateString(),
			},

			{
				name: 'Account Creation Date',
				value: new Date(user.createdTimestamp).toLocaleDateString(),
			},

			{
				name: 'Role Count',
				value: member.roles.cache.size - 1,
			},

			)

			.setFooter(`User Info for ${user.username} | v${version} - Created by hexianimates / swordcube`, user.displayAvatarURL())
			.setThumbnail(user.displayAvatarURL())
			.setColor(embedcolor)

			message.channel.send(userembed)
		}
		catch {
		
		};
		//end of code

	}
}