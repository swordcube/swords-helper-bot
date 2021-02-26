const Discord = require('discord.js');
const { version, botLogo, embedcolor } = require('../config.json')


module.exports = {
	name: 'ban',
	description: "Bans the person you @mention from the server.",
	async execute(message, args){

		//start of code
		try {
		
		// perm checking
		if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: You don't have permission to ban this user.");												
		if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: My role doesn't have permission to ban this user.");
		
		// variables
		let reason = args.slice(1).join(" ");
		const mentionedMember = message.mentions.members.first();

		// input checking
		if(!reason) reason = "No reason given.";
		if(!args[0]) return message.channel.send(":x: Please mention someone to ban. Example: `sw?ban @member reason`");
		if(!mentionedMember) return message.channel.send(":x: The member mentioned isn't in the server.. :thinking:");
		if(!mentionedMember.bannable) return message.channel.send(":x: I can't ban that member since their role is higher than mine.");

		// executing
		const banEmbed = new Discord.MessageEmbed()
			.setTitle(`You have been banned from ${message.guild.name}`)
			.setDescription(`Reason for being banned: ${reason}`)	
			.setColor(embedcolor)
			.setTimestamp();

		await mentionedMember.send(banEmbed).catch(err => console.log(err));
		await mentionedMember.ban({

			days: 7,
			reason: reason

		}).catch(err => console.log(err)).then(() => message.channel.send(":white_check_mark: **" + mentionedMember.user.tag + "** has successfully been banned."))

		}

		catch {
		
		};
		//end of code

	}
}