module.exports = {
	name: 'ping',
	description: "Tells you the bot's ping",
	execute(message, args){

		//start of code
		const msg = args.join(' ')

		message.channel.send(`:ping_pong: Pinging...`).then(msg => {

			const ping = msg.createdTimestamp - message.createdTimestamp;

			msg.edit(`:ping_pong: **The ping is:** ${ping}ms`);

		});
		//end of code

	}
}