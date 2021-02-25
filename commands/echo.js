module.exports = {
	name: 'echo',
	description: "Repeats what you say.",
	execute(message, args){

		//start of code
		const msg = args.join(' ')

		if (!msg) return message.channel.send(":x: You didn't tell me what to say lmao")

		message.channel.send(msg);
		//end of code

	}
}