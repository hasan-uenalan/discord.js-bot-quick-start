const Discord = require("discord.js");
const {yourBotToken} = require("./yourBotToken.json");
//instanciating the client
const client = new Discord.Client();

//settings
const prefix = "+";

//code when the bot is ready
client.on("ready", ()=>{
    console.log("rdy");
})

//code when a message is sent 
client.on("message", message =>{        
    
    const args = message.content.slice(prefix.length).split(" ");
    //extracts the command and makes the content lowercase so commands aren't case sensitive
    const command = args.shift().toLowerCase();

    // console.log(args);
    console.log(prefix.length);

    //only messages with the correct prefix and messages which aren't by the bot itself (to avoid unwanted recursive behaviour) get registered
    if(message.content.startsWith(prefix) === true && message.author.id !== client.user.id){
        switch(command){
            case "hi":
                message.channel.send("Hello!");
            break;
            case "commandName": //change the of the command to your preferences
                //add code here
            break;
        }
    }

})

client.login(yourBotToken);