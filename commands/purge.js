const Discord = require('discord.js');
const { prefix version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'purge',
	description: "Purges/clears an amount of messages that you specify.",
	async execute(message, args){

		//start of code
		try {
		const msg = args.join(' ')

		const { member, mentions } = message

		if (
			member.hasPermission('MANAGE_MESSAGES')

		) {

			if (!args[0]) return message.channel.send(":x: You didn't tell me a number to purge haha")

			let amount = parseInt(args[0]);

			if (isNaN(amount)) return message.channel.send(":x: You didn't tell me an actual number bruh")

			if (amount > 100 || amount < 2) return message.channel.send(":x: That number is too big or too small.")

			message.channel.bulkDelete(amount + 1);
			message.channel.send(`<@${member.id}> **${amount}** messages have been deleted.`)

		} else {
			message.channel.send(":x: You don't have the permissions to use this command.")
		}
		}
		catch {

		};
		//end of code

	}
}