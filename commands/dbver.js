const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'dbver',
	description: "Brings up the quick.db version.",
	async execute(message, args){

		//start of code
		try {
			message.channel.send(`${require("quick.db").version}`)
		}
		catch {
		
		};
		//end of code

	}
}