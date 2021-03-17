const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'lock',
	description: "Locks the channel you run this command in.",
	async execute(message, args){

		//start of code
		try {
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
			.setThumbnail(botLogo)
			.setColor(embedcolor)

			message.channel.send(lockembed)
		}
		catch {
		
		};
		//end of code

	}
}