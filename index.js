const Discord = require('discord.js')
//const db = require('quick.db');
// const db = require('mongoose')

// const dbOptions = {
//	useNewUrlParser: true,
//	useUnifiedTopology: true,
//	useFindAndModify: true
//}

// Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android";

const client = new Discord.Client()

const fs = require('fs')

const config = require('dotenv').config()

const keepAlive = require("./server");

client.commands = new Discord.Collection();

//const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
//for (const file of commandFiles){
//	const command = require(`./commands/${file}`);
//
//	client.commands.set(command.name, command);	
//}

const loadCommands = require('./commands/load-cmds')

const { prefix, version, botLogo, embedcolor } = require('./config.json')


// bot status

client.once('ready', async (message) => {

    // loading shit
    console.log("Sword's Helper is online")
    console.log("To turn off the bot, Go to the bot's Heroku Dashboard and turn off the `node index.js` switch.")
    console.log("Or if hosted from your (swordcube)'s pc, Press CTRL+C to turn off the bot.");

    loadCommands(client)

    // sending a message in a secret channel saying the bot is online
    const channel = client.channels.cache.find(channel => channel.id === "821599207961788416")

    const startupembed = new Discord.MessageEmbed()

    .setTitle("Bot started")
    .setDescription(`Sword's Helper has been started successfully.`)
    .setFooter(`v${version} - Created by hexianimates / swordcube`, botLogo)
    .setColor(embedcolor)
    channel.send(startupembed)

    // setting the bot's status

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

		const channel = client.channels.cache.find(channel => channel.id === "821599207961788416")
    		let invalidembed = new Discord.MessageEmbed()

    		.setTitle("Bot error")
    		.setDescription(`Something went wrong while executing the command ` + "``" + command + "``. \n\n**Error:**\n```" + err + "```")
    		.setFooter(`v${version} - Created by hexianimates / swordcube`, botLogo)
    		.setColor(embedcolor)
    		channel.send(invalidembed)
	}

});


// login to discord and w o r k

keepAlive()
client.login(process.env.TOKEN);

// ^^ create a file called .env and put this in it:
// TOKEN=BOT_TOKEN_HERE

// Replace "BOT_TOKEN_HERE" with your bot's token.