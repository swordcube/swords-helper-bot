const Discord = require('discord.js');
const { version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'echo',
	description: "Repeats what you say.",
	async execute(message, args){

		//start of code
		try {
		const msg = args.join(' ')

		if (!msg) return message.channel.send(":x: You didn't tell me what to say lmao")

		message.channel.send(msg);
		//end of code
		}
		catch {

		};

	}
}