// config.json variables are commented out, .env variables are used here
/*const {
    prefix,
    token,
} = require('./config.json');*/
require('dotenv').config();
// import dependencies, and variables from our json file
const { Client, Intents, MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// create client and login with our token
// client.login(token);
client.login(process.env.TOKEN);

// basic bot listeners that trigger when executed
client.once('ready', () => {
    console.log('Ready!');
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});



// create listener for message event and save it in message object
client.on('messageCreate', async message => {
    if (message.author.bot) return; // if our own bot wrote the message we ignore it
   
    if (!message.content.startsWith(process.env.PREFIX)) return; // if message doesnt start with our defined prefix we return
    
    // menu of commands
    

    if (message.content.startsWith(`${process.env.PREFIX}greeting`)){
        message.channel.send("Hello world!");
        return;
    }
   
    else if (message.content.startsWith(`${process.env.PREFIX}volunteer`)){
        const quoteEmbed = new MessageEmbed().setColor("BLUE").setTitle(`Volunteer opportunities for ${message.author.username}`).setURL("https://www.volunteermatch.org/").setDescription("Volunteer resources")
        message.reply({embeds: [quoteEmbed]});
        return;
    } 
    else {
        message.channel.send("You need to enter a valid command!"); // if invalid command, send this error message to the channel
    }
}