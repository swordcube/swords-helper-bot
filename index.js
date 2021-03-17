const Discord = require('discord.js')
//const db = require('quick.db');
// const db = require('mongoose')

// const dbOptions = {
//	useNewUrlParser: true,
//	useUnifiedTopology: true,
//	useFindAndModify: true
//}

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

const botstatuschannel = client.channels.cache.find(channel => channel.id === "821599207961788416")

global.function catchErr (err, message) {
	const rebootchannel = client.channels.cache.find(channel => channel.id === "821599207961788416")
	client.users.get('609047869613277190').send ("There was an error at " + message.channel + " in guild " + message.guild + ", ERROR: ```" + err + "```")
	botstatuschannel.send("There was an error at " + message.channel + " in guild " + message.guild + ", ERROR: ```" + err + "```");
}

// bot status

client.once('ready', async (message) => {
    console.log("Sword's Helper is online")
    console.log("To turn off the bot, Go to the bot's Heroku Dashboard and turn off the `node index.js` switch.")
    console.log("Or if hosted from your (swordcube)'s pc, Press CTRL+C to turn off the bot.");

    const startupembed = new Discord.MessageEmbed()

    .setTitle("Bot started")
    .setDescription(`Sword's Helper has been started successfully.`)
    .setFooter(`v${version} - Created by hexianimates / swordcube`, botLogo)
    .setColor(embedcolor)

    botstatuschannel.send(startupembed)

    client.user.setPresence({ 
	activity: { 
		name: `for ${prefix}help | v${version}`,
		type: "WATCHING"
	}, 
		status: 'dnd'
	})

});

// command recieving

client.on('message', async message => {

	// custom prefix shit

	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	
	try {

		client.commands.get(command).execute(message, args)

	}
	
	catch (err) {
		message.channel.send(":x: That command doesn't exist! Do `sw?help` for a list of commands you can use.")
		catchErr(err, message);
	}

});


// login to discord and w o r k

client.login(process.env.TOKEN);