const Discord = require('discord.js');
const { prefix, version, botLogo, embedcolor } = require('../config.json')


module.exports = {
	name: 'unban',
	description: "Unbans the person you provide a user ID for from the server.",
	async execute(message, args){

		//start of code
		try {
		
		// perm checking
		if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: You don't have permission to unban this ID.");												
		if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(":x: My role doesn't have permission to unban this ID.");
		
		// variables
		let reason = args.slice(1).join(" ");
		let userID = args[0];

		// input checking
		if(!reason) reason = "No reason given.";
		if(!args[0]) return message.channel.send(":x: Please mention someone to unban. Example: `sw?unban userID reason`");
		if(isNaN(args[0])) return message.channel.send(":x: That user ID isn't a number. Example: `sw?unban userID reason`");

		// executing
		message.guild.fetchBans().then(async bans => {
			if (bans.size == 0) return message.channel.send(":x: This server doesn't have any banned members.");
			let bUser = bans.find(b => b.user.id == userID)
			if (!bUser) return message.channel.send(":x: That ID isn't banned.");
			await message.guild.members.unban(bUser.user, reason).catch(err =>{
				return message.channel.send("Something went wrong unbanning that ID.")
			}).then(() => {
				message.channel.send(`:white_check_mark: <@${args[0]}> (${args[0]}) has successfully been unbanned.`)
			})
		})	

		}

		catch {
		
		};
		//end of code

	}
}