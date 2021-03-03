const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'serverinfo',
	description: "Brings up the info of the server you ran the command in.",
	async execute(message, args){

		//start of code
		try {
		const { guild } = message
				
		const { name, region, memberCount, owner, afkTimeout } = guild
		const icon = guild.iconURL()


		const msg = args.join(' ')

		const userembed = new Discord.MessageEmbed()

			.setTitle('Server Info')
			.addFields(
			{
				name: 'Name',
				value: name,
			},

			{
				name: 'Region',
				value: region,
			},

			{
				name: 'Members',
				value: memberCount,		
			},

			{
				name: 'Owner',
				value: owner.user.tag,
			},

			{
				name: 'AFK Timeout',
				value: afkTimeout / 60,
			},


			)

			.setFooter(`v${version} - Created by hexianimates / swordcube`, botLogo)
			.setThumbnail(icon)
			.setColor(embedcolor)

			message.channel.send(userembed)
		}
		catch {
		
		};
		//end of code

	}
}