const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'reboot',
	description: "Reboots/restarts the bot. (Only the bot owner can use this)",
	async execute(message, args){

		//start of code
		const msg = args.join(' ')

		if (message.author.id !== "609047869613277190") return message.channel.send(":x: You're not the owner of me >:(")
		message.channel.send("Preparing to reboot...")
		try {
			if (message.author.id == "609047869613277190")
				await message.channel.send("Restarting...")
			process.exit()
		} catch (e) {
			console.log(e.message)
		}
		//end of code

	}
}