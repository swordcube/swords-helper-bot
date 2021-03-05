const Discord = require('discord.js');
const db = require('quick.db');

// Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android";

const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);	
}

const { prefix, version, botLogo, embedcolor } = require('./config.json')

// bot status

client.once('ready', () => {
    console.log("Sword's Helper is online")
    console.log("To turn off the bot, Go to the bot's Heroku Dashboard and turn off the `node index.js` switch.")
    console.log("Or if hosted from your (swordcube)'s pc, Press CTRL+C to turn off the bot.");

    client.user.setPresence({ 
	activity: { 
		name: `for ${prefix}help | v${version}`,
		type: "WATCHING"
	}, 
		status: 'dnd'
	})
});

// command recieving

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	try {

		client.commands.get(command).execute(message, args)

	}
	
	catch (err) {
		message.channel.send(":x: That command doesn't exist! Do `sw?help` for a list of commands you can use.")
	}

});

// welcome message

client.on('guildMemberAdd', (member) => {

		let chx = db.get(`welchannel_${member.guild.id}`);

		if (chx === null) {
			return;
		}
		
		let wembed = new Discord.MessageEmbed()
		.setAuthor(member.user.username, member.user.avatarURL())
		.setColor(embedcolor)
		.setThumbnail(member.user.avatarURL())
		.setDescription(`Welcome to the server, ${member}. We are happy to see you here!`);

		client.channels.cache.get(chx).send(wembed)

});

// leave message


// login to discord and w o r k

client.login(process.env.TOKEN);