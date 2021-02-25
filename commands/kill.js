module.exports = {
	name: 'kill',
	description: "Tells you the bot's ping",
	execute(message, args){

		//start of code
		const msg = args.join(' ')

		const { member, mentions } = message

		const target = mentions.users.first()

		if (isNaN(target)) return message.channel.send(":x: Please mention someone to kill hahahae")

		message.channel.send(`:knife: ${target} is now ded`)

		message.channel.send('https://cdn.discordapp.com/attachments/757043191118692386/814287239802519562/kill.gif')
		//end of code

	}
}