const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'clap',
	description: "Repeats what you say, but with claps in-between.",
	async execute(message, args){

		//start of code
		try {
		const msg = args.join(' ')

		if (!args[1]) return message.channel.send(":x: You need to add 2 or more words for this to work xd");

		var split = args.join(' 👏 ')

		message.channel.send(split)
		//end of code
		}
		catch {

		};

	}
}