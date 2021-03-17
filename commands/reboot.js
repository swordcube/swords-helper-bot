const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'reboot',
	description: "Reboots/restarts the bot. (Only the bot owner can use this)",
	async execute(message, args){

		//start of code
		const msg = args.join(' ')
		const rebootchannel = client.channels.cache.find(channel => channel.id === "821599207961788416")
		const rebootembed = new Discord.MessageEmbed()

		.setTitle("Rebooting")
		.setDescription(`The reboot command was activated and the bot is now rebooting.`)
		.setFooter(`v${version} - Created by hexianimates / swordcube`, botLogo)
		.setColor(embedcolor)

		if (message.author.id !== "609047869613277190") return message.channel.send(":x: You're not the owner of me >:(")
		message.channel.send("<a:loading:821602521000181760> Preparing to reboot...")
		try {
			if (message.author.id == "609047869613277190")
				await message.channel.send("<a:loading:821602521000181760> Restarting...")
    				await rebootchannel.send(rebootembed)
			process.exit()
		} catch (e) {
			console.log(e.message)
		}
		//end of code

	}
}