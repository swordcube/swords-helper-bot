const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')

module.exports = {
	name: 'ping',
	description: "Tells you the bot's ping",
	async execute(message, args){

		//start of code
		try {
		const msg = args.join(' ')

		message.channel.send(`:ping_pong: Pinging...`).then(msg => {

			const ping = msg.createdTimestamp - message.createdTimestamp;

			msg.edit(`:ping_pong: **The ping is:** ${ping}ms`);
			
		})
		}
		catch {

		};
		//end of code

	}
}