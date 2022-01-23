
const {
    prefix,
    token,
} = require('./config.json');


// import dependencies, and variables from our json file
const { Client, Intents, MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// create client and login with our token
client.login(token);


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



client.on('messageCreate', async message => {
    if (message.author.bot) return; 
    if (!message.content.startsWith(prefix)) return; 
    
    // menu of commands
    
    if (message.content.startsWith(`${prefix}name`)) {
        message.reply(`Your name is ${message.author.username}`);
        return;
    }

    else if (message.content.startsWith(`${prefix}greeting`)){
        message.channel.send("Hello! I am here to build a bridge between your Discord fam and your IRL fam. Try typing &Health, &Culture or &Volunteer to find ways to connect to your community or to the LGBTQ+ community in Colorado. Soon you'll be able to find us in all of the United States. Hopefully later - the world. Inclusive communities should be easily available to all. BridgeSearch to find your way!");
        return;
    }

    else if (message.content.startsWith(`${prefix}secret`)) {
        message.author.send(
          "Do you want to search privately so the other peeps don't see? We can also chat in your direct messages."
        ); // sends direct message to author
        return;
    }
   
    else if (message.content.startsWith(`${prefix}Health`)) {
        const quoteEmbed = new MessageEmbed()
          .setColor("AQUA")
          .setTitle(`Bridge 🌉 for ${message.author.username}`)
          .setURL(
            "https://one-colorado.org/lgbtq-issues/lgbtq-healthcare-colorado/"
          )
          .setDescription(
            "Visit One-Colorado. Lesbian, gay, bisexual, transgender, and queer (LGBTQ) Coloradans often face many challenges and barriers to achieving a healthy life. While LGBTQ individuals have many of the same concerns as the general population, like affordability, access, and quality of care, they also face several unique challenges that affect the ability to live healthy and affirmed lives."
          );
        message.channel.send({ embeds: [quoteEmbed] }); // sends embedded message to channel
        return;
          }

    else if (message.content.startsWith(`${prefix}Volunteer`)){
        const quoteEmbed = new MessageEmbed().setColor("NAVY").setTitle(`Volunteer opportunities for ${message.author.username}`).setURL("https://www.volunteermatch.org/").setDescription("Volunteer resources")
        message.reply({embeds: [quoteEmbed]});
        return;
    } 
   
    else if (message.content.startsWith(`${prefix}Culture`)){
        const msgEmbed = new MessageEmbed()
        .setColor("ORANGE")
        .setTitle(`Culture and Desire, LGBT Movements: Global Progress for ${message.author.username}`)
        .setURL("https://stonewallforever.org/")
        .setDescription("A Living Monument to 50 Years of Pride")
        return;
    }

    else {
        message.channel.send("You need to enter a valid command!"); // if invalid command, send this error message to the channel
    }
});