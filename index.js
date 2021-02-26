const Discord = require('discord.js');

// Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android";

const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);	
}

const { token, prefix, version, botLogo, embedcolor } = require('./config.json')

client.once('ready', () => {
    console.log('Bot is online');
    client.user.setPresence({ 
	activity: { 
		name: `for ${prefix}help | v${version}`,
		type: "WATCHING"
	}, 
		status: 'dnd'
	})

  	.then(console.log)
    	.catch(console.error);
});

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









client.login(token);