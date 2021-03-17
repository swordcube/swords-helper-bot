const Discord = require("discord.js")
const { prefix, version, botLogo, embedcolor } = require('../config.json');

module.exports = {
	name: "help-new",
	description: "Brings up this message.",

	execute(client, message, args) {
		if(!args[0]) {
			const helpembed = new Discord.MessageEmbed()
			
			.setTitle(Help)
			.setDescription("Here is a list of all available commands for Sword's Helper.)
			.setColor(embedcolor)
		
		client.commands.forEach((command) => {
			helpembed.addField(command.name, command.description)
		});

		message.channel.send(helpembed)
		}
	},	//end of code
};