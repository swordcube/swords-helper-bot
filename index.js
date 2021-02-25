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
	
	if(command === 'help') {
		client.commands.get('help').execute(message, args)

	} else if(command === 'ping') {

		client.commands.get('ping').execute(message, args)

	} else if(command === 'clap') {

		client.commands.get('clap').execute(message, args)

	} else if(command === 'echo') {

		client.commands.get('echo').execute(message, args)

	} else if(command === 'kill') {

		client.commands.get('kill').execute(message, args)

	} else if(command === 'kick') {

		client.commands.get('kick').execute(message, args)

	} else if(command === 'ban') {

		client.commands.get('ban').execute(message, args)

	} else if(command === 'purge') {

		client.commands.get('purge').execute(message, args)

	} else if(command === 'reboot') {

		client.commands.get('reboot').execute(message, args)

	}

});









client.login(token);