const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'prefix',
	description: "Allows you to change the prefix of the bot for your server.",
	async execute(message, args){

		//start of code
		try {
			if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(":x: You don't have the permissions to change the server prefix.");
			if(!args[0]) return message.channel.send(":x: You didn't tell me what to change the prefix to.");


			await db.set(`prefix_${message.guild.id}`, args[0])			

			message.channel.send("hi")
		}
		catch (err) {
			message.channel.send(err)
		};
		//end of code

	}
}