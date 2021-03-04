const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'invite',
	description: "Brings up the bot's invite",
	async execute(client, message, args){

		//start of code
		try {
		const msg = args.join(' ')

		client.generateInvite({
  		permissions: ['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'],
		})
		const invite = `${link}`
		
		const helpembed = new Discord.MessageEmbed()

			.setTitle("Invite")
			.setDescription(`Want to invite the bot to your server?
Click the link below:
https://discord.com/oauth2/authorize?client_id=766645902491648010&scope=bot&permissions=805314622`)
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