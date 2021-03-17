const { MessageEmbed } = require("discord.js");
// const { prefix, version, botLogo, embedcolor } = require('../config.json');

module.exports = {
	name: "help-new",
	description: "Brings up this message.",

	execute(client, message, args) {
		if (!args[0]) {
			const embed = new MessageEmbed()
				.setColor("BLUE")
				.setTitle(Help);

			client.commands.forEach((command) => {
				embed.addField(command.name, command.description);
			});

			message.channel.send(embed);
		}
	},	//end of code
};