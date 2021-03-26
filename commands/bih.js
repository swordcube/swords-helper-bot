const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')
const currentdate = new Date()

module.exports = {
	name: 'bih',
	description: "Generates a tombstone.",
	async execute(message, args){

		//start of code
		try {
		const msg = args.join('+')

		const ripembed = new Discord.MessageEmbed()

			.setImage(`http://www.tombstonebuilder.com/generate.php?top1=B.I.H&top2=&top3=${msg}&top4=1000+-+${currentdate.getFullYear()}&sp=`)
			.setColor(embedcolor)

			if (!msg) return message.channel.send(":x: You didn't type in anything. Try again.");

			message.channel.send(ripembed)
		}
		catch {
		
		};
		//end of code

	}
}