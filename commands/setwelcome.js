const Discord = require('discord.js');
const db = require("quick.db")
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'setwelcome',
	description: "Set the channel for welcome & leave messages.",
	async execute(message, args){

		//start of code
		try {
		
		// basic channel shit

		let channel = message.mentions.channels.first()

		if(!channel) {
			return message.channel.send(":x: Please mention a channel to set.")
		}

		// quick.db shit

		db.set(`welchannel_${message.guild.id}`, channel.id)

		message.channel.send(`:white_check_mark: Successfully set the welcome/leave channel to ${channel}.`)

		}
		catch {
		
		};
		//end of code

	}
}