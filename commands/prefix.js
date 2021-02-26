const Discord = require('discord.js');
const { version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'prefix',
	description: "Allows you to change the prefix of the bot for your server.",
	async execute(message, args){

		//start of code
		try {
			message.channel.send(":x: This command might work in the future. But for now you can't this bot's prefix. Sorry :/")
		}
		catch {

		};
		//end of code

	}
}