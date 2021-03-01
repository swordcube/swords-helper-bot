const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')


module.exports = {
	name: 'kick',
	description: "Kicks the person you @mention from the server.",
	async execute(message, args){

		//start of code
		try {
		
		// perm checking
		if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: You don't have permission to kick this user.");												
		if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(":x: My role doesn't have permission to kick this user.");
		
		// variables
		let reason = args.slice(1).join(" ");
		const mentionedMember = message.mentions.members.first();

		// input checking
		if(!reason) reason = "No reason given.";
		if(!args[0]) return message.channel.send(":x: Please mention someone to kick. Example: `sw?kick @member reason`");
		if(!mentionedMember) return message.channel.send(":x: The member mentioned isn't in the server.. :thinking:");
		if(!mentionedMember.kickable) return message.channel.send(":x: I can't kick that member since their role is higher than mine.");

		// executing
		const kickEmbed = new Discord.MessageEmbed()
			.setTitle(`You have been kicked from ${message.guild.name}`)
			.setDescription(`Reason for being kicked: ${reason}`)	
			.setColor(embedcolor)
			.setTimestamp();

		await mentionedMember.send(kickEmbed).catch(err => console.log(err));
		await mentionedMember.kick({

			days: 7,
			reason: reason

		}).catch(err => console.log(err)).then(() => message.channel.send(":white_check_mark: **" + mentionedMember.user.tag + "** has successfully been kicked."))

		}

		catch {
		
		};
		//end of code

	}
}